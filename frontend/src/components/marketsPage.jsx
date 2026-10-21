import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export function Currencies({onSelect}) {
    function handleSelect(event) {

        const symbol = event.target.value
        onSelect("currency", symbol);
    }

    return  (
        <>
            <label form="currencies">Currencies</label>
            <select id="currencies" name="currency" onChange={handleSelect}
            >
                <option value="JPY">USD/JPY</option>
                <option value="EUR">USD/EUR</option>
                <option value="GBP">USD/GBP</option>
                <option value="CAD">USD/CAD</option>
                <option value="AUD">USD/AUD</option>
            </select>
        </>
    );
}

export function Materials({onSelect}) {
    function handleSelect(event) {

        const symbol = event.target.value
        onSelect("commodity",symbol);
    }

    return (
        <>
            <label form="materialList">Commodities</label>
            <select id="materialList" name="commodity" onChange={handleSelect}
            >
                <option value="WTI">WTI-Oil futures</option>
                <option value="BRENT">Brent Oil futures</option>
                <option value="XAU">Gold</option>
                <option value="XAG">Silver</option>
                <option value="ALUMINUM">Aluminium</option>
                <option value="SUGAR">Sugar</option>
            </select>
        </>
    )
}

export function Charts({data, type}) {
    console.log("Charts sai: ", data);
    let chartData;

    if (!type || !data || (Array.isArray(data) && data.length === 0)) {
        return <p>Valitse kohde nähdäksesi graafin.</p>;
    }

    if (type === "currency") {
        const timeSeries = data["Time Series FX (Daily)"];
        if (!timeSeries) {
            return <p>Valuuttadataa ei löytynyt.</p>;
        }
        const labels = Object.keys(timeSeries).reverse();
        const prices = Object.values(timeSeries)
            .map(item => Number(item["4. close"]))
            .reverse();

        chartData = {
            labels: labels,
            datasets: [
                {
                    type: "line",
                    label: "Exchange rate",
                    data: prices,
                    borderColor: "blue"
                }
            ]
        }
    }

    if (type === "stock") {

        if (!data?.data || data.data.length === 0) {
            return <p>Osakedataa ei löytynyt.</p>;
        }
        const timeSeries = [...data.data].reverse();
        const labels = timeSeries.map(item => item.date);
        const prices = timeSeries
            .map(item => Number(item.close)
    );
        chartData = {
            labels,
            datasets: [
                {
                    label: "Stock price",
                    data: prices,
                    borderColor: "blue"
                }
            ]
        }
    }

    if (type === "commodity") {
        console.log("Commodity response:", data);
        console.log("Ensimmäinen commodity datapiste:", data.data?.[0]);

        if (!data?.data || data.data.length === 0) {
            return <p>dataa ei löytynyt.</p>;
        }
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

        const timeSeries = [...data.data].filter(item => new Date(item.date) >= oneYearAgo).reverse();
        const labels = timeSeries.map(item => item.date);

        const prices = timeSeries.map(
        item => Number(item.price || item.value)
    );
        chartData = {
            labels,
            datasets: [
                {
                    label: "Commodity price",
                    data: prices,
                    borderColor: "blue"
                }
            ]
        }
    }
    if (!chartData) {
        return <p>Graafidataa ei löytynyt.</p>;
    }
    return (
        <div>
            <Line data={chartData}/>
        </div>
    )
}
//tee chart uudelleen
//watchlist, lisätään vaikka searchin jälkeisen togglen kautta