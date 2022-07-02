import React, {Component} from "react";
import './hw2Format.css';


function Block(props) {
    //gets a number, and based on the number, defines the style
    //let num = props.number;
    const isPrime = (num) => {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return (num > 1);
    }

    if (isPrime(props.number)) { //is prime
        return (
            <>
                <p className="Block-Prime">
                    {props.number}
                </p>
            </>
        )
    }
    else if (props.number % 2 === 0) {
        return (
            <>
                <p className="Block-Even">
                    {props.number}
                </p>
            </>
        )
    }
    else {
        return (
            <>
                <p className="Block-Odd">
                    {props.number}
                </p>
            </>
        )
    }
}


function Blocks(props) {
    //gets an array of numbers, then passes each element of the number array to Block and
    //generates an array of blocks (can use the map function)
    return (
        <>
            {props.arr.map(num => <Block number={num} />)}
        </>
    )
}

function Grid(props) {
    //gets the start and end numbers and generates the array, then passes
    //that array to Blocks

    return (
        <>
            <Blocks arr={Array(props.end - props.start + 1).fill().map((_, idx) => props.start + idx)} />
        </>
    )
}

export default function HW2() {
    const arrayNums = {
        start: 1,
        end: 79
    }

    return (
        <p className="Grid-Format">
            <Grid start={arrayNums.start} end={arrayNums.end} />
        </p>
    )
}
