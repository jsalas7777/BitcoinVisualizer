const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5001;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// GET request to fetch Bitcoin price from Bybit Kline
app.get("/bitcoin-price", async (req, res) => {
  try {
    const response = await axios.get("https://api.bybit.com/v5/market/kline", {
      params: {
        category: "spot",
        symbol: "BTCUSDT",
        interval: "1", // 1-minute candles
        limit: 1, // just the latest candle
      },
    });

    const kline = response.data.result.list[0];
    const closePrice = kline[4]; // [openTime, open, high, low, close, volume, turnover]

    res.json({
      symbol: "BTCUSDT",
      price: parseFloat(closePrice),
    });
  } catch (error) {
    console.error("Error fetching BTC price:", error.message);
    res.status(500).json({ error: "Failed to fetch Bitcoin price" });
  }
});
