package securities;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestClient;

@RestController
@RequestMapping("/api/stocks")
public class MarketController {

    @Value("${marketstack.api.key}")
    private String apiKey;
    private final RestClient restClient;
    public MarketController(RestClient.Builder builder) {
        this.restClient = builder
                .baseUrl("https://api.marketstack.com")
                .build();
    }

    @GetMapping("/{symbol}")
    public String getStock(@PathVariable String symbol) {
        return restClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/v2/eod/latest")
                        .queryParam("access_key", apiKey)
                        .queryParam("symbols", symbol)
                        .build())
                .retrieve()
                .body(String.class);
    }
}
