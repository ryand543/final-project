function done() {
    document.getElementById("updateButton").addEventListener("click", makeRequest)
}

function getDate() {
    return document.getElementById('dateInput').value
}

function genRequest() {
    const apiKey = "api_key=UxwyFrlTrUC1HwjtzRMkMmOY9yumu4hlqUPd0kIb"
    let date = getDate()
    console.log(typeof(date))
    date = (date !== "")?`date=${date}`:""
    console.log(date)

    return "https://api.nasa.gov/planetary/apod?" + apiKey + "&" + date.toString()
}

function makeRequest() {
    const reqUrl = genRequest()
    let httpRequest = new XMLHttpRequest()
    httpRequest.onreadystatechange = handleRequest
    httpRequest.open("GET", reqUrl)
    httpRequest.send()

    function handleRequest() {
        console.log(httpRequest.readyState)
        if (httpRequest.readyState === XMLHttpRequest.DONE &&
            httpRequest.status === 200) {
            let data = JSON.parse(httpRequest.responseText)
            console.log(data)
            const {url, copyright, date, explanation, hdurl, media_type,
                service_version, title} = data
            console.log(url)
            document.getElementById('tempImg').src = url
            document.getElementById('desc').textContent = explanation
        }
    }
}

