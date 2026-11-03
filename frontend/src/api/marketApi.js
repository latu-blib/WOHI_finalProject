export async function getData(type, symbol) {
    let endpoint;
    if (type === "stock") {
        endpoint = `markets/${symbol}`;
    } else if (type === "currency") {
        endpoint = `markets/currencies/${symbol}`;
    } else if (type === "commodity") {
        endpoint = `markets/commodity/${symbol}`;
    } else if (type === "news") {
        endpoint = `markets/news`;
    } else {
        throw new Error(`Unknown market type: ${type}`);
    }

    const response = await fetch(`${API_BASE}/api/${endpoint}`);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
}

const API_BASE = "https://wohi-backend.onrender.com";