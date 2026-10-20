package securities;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestClient;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/api/markets")
@CrossOrigin(origins = "http://localhost:5173")
public class MarketController {

    @Value("${marketstack.api.key}")
    private String apiKey;
    private final RestClient restClient;

    public MarketController(RestClient.Builder builder) {
        this.restClient = builder
                .baseUrl("https://api.apilayer.net/marketstack")
                .build();
    }

    @GetMapping("/{symbol}")
    public String getStock(@PathVariable String symbol) {

        return restClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/v2/stockprice/latest")
                        .queryParam("access_key", apiKey)
                        .queryParam("ticker", symbol)
                        .build())
                .retrieve()
                .body(String.class);
    }

    @GetMapping("/index/{symbol}")
    public String getIndex(@PathVariable String symbol) {

        return restClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/v2/exchanges/{mic}/eod/latest")
                        .queryParam("access_key", apiKey)
                        .queryParam("symbols", symbol)
                        .queryParam("mic", symbol)
                        .build())
                .retrieve()
                .body(String.class);
    }

    @GetMapping("/commodities/{symbol}")
    public String getCommodity(@PathVariable String symbol) {

        return restClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/v2/commodities/latest")
                        .queryParam("access_key", apiKey)
                        .queryParam("commodity_name", symbol)
                        .build())
                .retrieve()
                .body(String.class);
    }

    @GetMapping("/currencies/{symbol}")
    public String getCurrency(@PathVariable String symbol) {

        return restClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/v2/currencies/latest")
                        .queryParam("access_key", apiKey)
                        .queryParam("symbols", symbol)
                        .build())
                .retrieve()
                .body(String.class);
    }

}
