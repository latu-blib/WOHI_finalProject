export async function getData(type,symbol) {

    const response = await fetch(`http://localhost:8080/api/markets/${type}/${symbol}`);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
}