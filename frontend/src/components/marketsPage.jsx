function Indexes() {
    return (
        <>
        <label form="marketPlaces">Indexes</label>
        <select id="marketPlaces" name="marketPlaces">
            <option>OMXHPI</option>
            <option>S&P500</option>
            <option>DAX</option>
        </select>
        </>
)
}

function Materials() {
    return (
        <>
            <label form="materialList">Raw materials</label>
            <select id="materialList" name="materialList">
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

function Currencies() {
    return (
        <>
            <label form="denomination">Currencies</label>
            <select id="denomination" name="denomination">
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

function Charts() {
    return (
        <canvas id="marketGraphs"></canvas>
    )
}