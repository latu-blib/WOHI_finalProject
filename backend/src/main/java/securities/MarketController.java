package securities;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestClient;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.time.LocalDate;

@RestController
@RequestMapping("/api/markets")
@CrossOrigin(origins = "http://localhost:5173")

public class MarketController {

    LocalDate today =  LocalDate.now();
    LocalDate yearAgo = today.minusYears(1);

    @Value("${marketstack.api.key}")
    private String marketStackApiKey;
    private final RestClient marketStackrestClient;

    @Value("${alphavantage.api.key}")
    private String alphaVantageApiKey;
    private final RestClient alphaRestClient;

    @Value("${marketaux.api.key}")
    private String marketAuxApiKey;
    private final RestClient marketAuxRestClient;

    public MarketController(RestClient.Builder builder) {
        this.marketStackrestClient = builder
                .baseUrl("https://api.apilayer.net/marketstack")
                .build();

        this.alphaRestClient = builder
                .baseUrl("https://www.alphavantage.co")
                .build();

        this.marketAuxRestClient = builder
                .baseUrl("https://api.marketaux.com")
                .build();
    }

    @GetMapping("/{symbol}")
    public String getStock(@PathVariable String symbol) {

        return marketStackrestClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/v2/eod")
                        .queryParam("access_key", marketStackApiKey)
                        .queryParam("symbols", symbol)
                        .queryParam("date_from", yearAgo)
                        .queryParam("date_to", today)
                        .build())
                .retrieve()
                .body(String.class);
    }

    @GetMapping("/currencies/{symbol}")
    public String getCurrency(@PathVariable String symbol) {

        return alphaRestClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/query")
                        .queryParam("apikey", alphaVantageApiKey)
                        .queryParam("symbol", symbol)
                        .queryParam("function", "FX_DAILY")
                        .queryParam("from_symbol", "USD")
                        .queryParam("to_symbol", symbol)
                        .build())
                .retrieve()
                .body(String.class);
    }

    @GetMapping("/commodity/{symbol}")
    public String getCommodity(@PathVariable String symbol) {
        String symbol2 =
        symbol.equals("XAU") || symbol.equals("XAG")
                ? "GOLD_SILVER_HISTORY"
                : symbol;

        return alphaRestClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/query")
                        .queryParam("apikey", alphaVantageApiKey)
                        .queryParam("symbol", symbol)
                        .queryParam("function", symbol2)
                        .queryParam("interval", "daily")
                        .build())
                .retrieve()
                .body(String.class);
    }

    @GetMapping("/news")
    public String getNews() {
        return marketAuxRestClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/v1/news/all")
                        .queryParam("language", "en")
                        .queryParam("limit", 3)
                        .queryParam("api_token", marketAuxApiKey)
                        .build())
                .retrieve()
                .body(String.class);
    }
}
