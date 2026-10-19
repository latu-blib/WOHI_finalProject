export async function getData() {

    const response = await fetch("http://localhost:8080/api/markets");
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
}