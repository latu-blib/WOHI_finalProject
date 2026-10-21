export async function getData(type, symbol) {
    let endpoint;
    if (type === "stock") {
        endpoint = symbol;
    } else if (type === "currency") {
        endpoint = `currencies/${symbol}`;
    } else if (type === "commodity") {
        endpoint = `commodity/${symbol}`;
    } else {
        throw new Error(`Unknown market type: ${type}`);
    }

    const response = await fetch(`http://localhost:8080/api/markets/${endpoint}`);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
}