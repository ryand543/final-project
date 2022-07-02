import * as d3 from "express";

function graphData() {
    let margin = {top: 10, right: 100, bottom: 40, left:60}
    d3.json("./finance.json").then(data=>{
        let svg = d3.select("#main").append("svg")
        let pxX = 600 - margin.left - margin.right,
            pxY = 300 - margin.top - margin.bottom
        svg = svg.attr("width", 600 + margin.left + margin.right)
            .attr("height", 300 + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left} ${margin.top})`)

        let {result} = data.chart
        let {timestamp, comparisons} = result[0]
        let date = []
        timestamp.forEach(data=> {
            date.push(new Date(data * 1000))
        })

        let scX = d3.scaleTime()
            .domain([date[0], date[date.length - 1]])
            .range([0, pxX])
            .nice()

        let [minVal, maxVal] = [Infinity, -Infinity]
        comparisons.forEach(tick=> {
            if (d3.min(tick.high) < minVal) {
                minVal = d3.min(tick.high)
            }
            if (d3.max(tick.high) > maxVal) {
                maxVal = d3.max(tick.high)
            }
        })
        let scY = d3.scaleLinear().domain([minVal, maxVal]).range([pxY, 0]).nice()
        let color = ["red", "blue", "purple", "green"]

        comparisons.forEach((tick, idx)=> {
            let {high, symbol} = tick
            let g = svg.append("g")
            g.selectAll("circle").data(high).enter()
                .append('circle')
                .attr('fill', color[idx])
                .attr('r', 3)
                .attr('cx', (d, i)=>scX(date[i]))
                .attr('cy', function(high) {
                    return scY(high)
                })

            let makeLine = d3.line()
                .x((d, i)=>scX(date[i]))
                .y(function(high) {
                    return scY(high)
                })
            g.append("path")
                .attr("d", makeLine(high))
                .attr("fill", "none")
                .attr("stroke", color[idx])

            let toolTip = svg.append("text")

            g.selectAll("circle")
                .on("mouseover", function(e, d) {
                    let [x, y] = d3.pointer(e, this)
                    toolTip.attr("visibility", "visible")
                        .attr("pointer-events", "none")
                        .attr("x", x+10)
                        .attr("y", y)
                        .text(`${d}`)
                })
                .on("mouseleave", function() {
                    toolTip.attr("visibility", "invisible")
                        .text("")
                })

            //adding a legend
            g.append("text")
                .attr("x", pxX + 20)
                .attr("y", 200 - idx * 20)
                .attr("fill", color[idx])
                .text(`${symbol}`)
        })



        //adding graph axis
        let axis = d3.axisLeft(scY)
        svg.append("g")
            .call(axis)

        axis = d3.axisBottom(scX)
        svg.append("g")
            .attr("transform", `translate(0, ${pxY})`)
            .call(axis)
            .selectAll("text")
            .attr("transform", `rotate(90)translate(20, 0)`)
    }).catch(err=>console.log(err))
}