import {useEffect, useState} from "react";
import {getData} from "../api/marketApi.js";

export function Indexes(props) {
    const [data, setData] = useState([]);

    async function handleChange(event) {
        const selectedIndex = event.target.value;
        console.log("Haettava symboli:", selectedIndex);
        try {
            const result = await getData(selectedIndex);
            setData(result);
        } catch (error) {
            console.error("Data fetch failed:", error);
        }
    }
    return  (
        <>
            <label form="marketPlaces">Indexes</label>
            <select id="marketPlaces" name="marketPlaces" onChange={handleChange}>
                <option value="OMXHPI">OMXHPI</option>
                <option value="S&P500">S&P500</option>
                <option value="DAX">DAX</option></select>
        </>
    );
}

export function Materials(props) {
    const [data, setData] = useState([]);

    async function handleChange(event) {
        const selectedIndex = event.target.value;
        console.log("Haettava symboli:", selectedIndex);
        try {
            const result = await getData(selectedIndex);
            setData(result);
        } catch (error) {
            console.error("Data fetch failed:", error);
        }
    }
    return (
        <>
            <label form="materialList">Raw materials</label>
            <select id="materialList" name="materialList" onChange={handleChange}>
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

    async function handleChange(event) {
        const selectedIndex = event.target.value;
        console.log("Haettava symboli:", selectedIndex);
        try {
            const result = await getData(selectedIndex);
            setData(result);
        } catch (error) {
            console.error("Data fetch failed:", error);
        }
    }
    return (
        <>
            <label form="currency">Currencies</label>
            <select id="currency" name="currency" onChange={handleChange}>
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


//Muista tehdä useState jokaiseen dropDowniin
//Katso tarkemmin Fetch calls in React.