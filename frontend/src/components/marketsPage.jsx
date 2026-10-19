import {useEffect, useState} from "react";
import {getData} from "../api/marketApi.js";

export function Indexes(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData().then.data(result => {setData(result)
        }).catch(error => {
            console.error("Data fetch failed.", error);
        });
    }, []);

    function handleClick(props) {
        console.log("Markets klikattu");
    }
    return (
        <>
        <label form="marketPlaces">Indexes</label>
        <select id="marketPlaces" name="marketPlaces" onClick={handleClick}>
            <option>OMXHPI</option>
            <option>S&P500</option>
            <option>DAX</option>
        </select>
        </>
)
}

export function Materials(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData().then.data(result => {setData(result)
        }).catch(error => {
            console.error("Data fetch failed.", error);
        });
    }, []);

    function handleClick(props) {
        console.log("Markets klikattu");
    }
    return (
        <>
            <label form="materialList">Raw materials</label>
            <select id="materialList" name="materialList" onClick={handleClick}>
                <option>WTI-Oil</option>
                <option>Brent Oil</option>
                <option>Gold</option>
                <option>Silver</option>
                <option>Copper</option>
                <option>Aluminium</option>
            </select>
        </>
    )
}

export function Currencies(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData().then.data(result => {setData(result)
        }).catch(error => {
            console.error("Data fetch failed.", error);
        });
    }, []);

    function handleClick(props) {
        console.log("Markets klikattu");
    }
    return (
        <>
            <label form="currency">Currencies</label>
            <select id="currency" name="currency" onClick={handleClick}>
                <option>EUR/USD</option>
                <option>USD/JPY</option>
                <option>GBD/USD</option>
                <option>USD/CAD</option>
                <option>AUD/USD</option>
                <option>EUR/GBD</option>
                <option>EUR/JPY</option>
            </select>
        </>
    )
}

export function Charts(props) {
    const [graph, setGraph] = useState(graph)
    return (
        <canvas id="marketGraphs"></canvas>
    )
}
//Muista tehdä useState jokaiseen dropDowniin
//Katso tarkemmin Fetch calls in React.