# App for Securities

A full-stack market tracking application for monitoring currencies, stock- and commodityprices, and recent financial news. The app includes a searchable dashboard, interactive charts, and a personal watchlist for favorite securities.

## Features

- Search for stock symbols and view market data
- Browse currencies and commodities from external market APIs
- Display chart-based price history for selected assets
- Save selected stocks to a watchlist
- View recent market news
- Responsive UI built with React and Bootstrap
- built with free API's in mind

## Tech Stack

- Frontend: React, Vite, Bootstrap, Chart.js
- Backend: Java, Spring Boot
- Data providers: Marketstack, Alpha Vantage, MarketAux

## Project Structure

```text
app_for_securities/
├── backend/                     # Spring Boot API
│   ├── src/main/java/securities/
│   └── src/main/resources/
├── frontend/                    # React application
│   └── src/
├── index.html
├── package.json
├── vite.config.js
├── public/
└── README.md
```

## Prerequisites

Before running the app, make sure you have:

- Node.js and npm installed
- Java 17 or newer
- Maven installed
- Valid API keys for the market data providers used by the backend

## Configuration

The backend reads API keys from:

```text
backend/src/main/resources/application.properties
```

Example format:

```properties
marketstack.api.key=YOUR_MARKETSTACK_KEY
alphavantage.api.key=YOUR_ALPHA_VANTAGE_KEY
marketaux.api.key=YOUR_MARKETAUX_KEY
```

Replace the example values with your own keys before starting the backend.

## Running the Project

### 1. Install frontend dependencies

From the project root:

```bash
npm install
```

### 2. Start the backend

```bash
cd backend
mvn spring-boot:run
```

The backend runs on:

```text
http://localhost:8080
```

### 3. Start the frontend

In a second terminal, from the project root:

```bash
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

## Main Application Flow

- Open the app in the browser at `http://localhost:5173`
- Search for a security symbol such as `AAPL`, `MSFT`, or `EUR`
- View the corresponding market data and chart
- Add items to the watchlist for quick access
- Navigate to the News page for market updates
- Open the Watchlist page to review saved securities

## Notes

- Frontend requests are sent to the backend API on port `8080`
- The backend uses CORS settings to allow requests from the Vite frontend running on port `5173`
- The project is intended as a market dashboard prototype and can be expanded with user authentication, portfolio features, and additional charting tools

## License

This project is for educational use.
