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
                        .path("/v2/eod/latest")
                        .queryParam("access_key", apiKey)
                        .queryParam("symbols", symbol)
                        .build())
                .retrieve()
                .body(String.class);
    }
}
