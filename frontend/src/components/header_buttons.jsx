export function MarketsButton() {
    let status = true
    document.getElementById("Markets").addEventListeners("click", function() {
        if (status === false) {
            status = true}
    }
    )
    return (
        <button className="headerButtons" id="Markets">Markets</button>
    );
}

export function NewsButton() {
    let status = false
    document.getElementById("News").addEventListeners("click", function() {
        if (status === false) {
            status = true}
    }
    )
    return (
        <button className="headerButtons" id="News">News</button>
    );
}

export function WatchListButton() {
    let status = false
    document.getElementById("myList").addEventListeners("click", function () {
        if (status === false) {
            status = true
        }
    }
    )
    return (
        <button className="headerButtons" id="myList">Watchlist</button>
    );
}

function SearchBar() {
    return (
        <form> <label id="searchBar">Search:</label>
            <input type="Search" id="searchBar" placeholder="Search" name="Search"/>
            <button>Search</button>
        </form>
    );
}