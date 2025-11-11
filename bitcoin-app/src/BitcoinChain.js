import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import StockChart from "./Stockchart";
import OrderBook from "./Orderbook";
import BitcoinChainBook from "./BitcoinChainBook";

const BitcoinChain = () => {
  const stats = [
    { label: "Current Price", value: "$24,320.50" },
    { label: "Opening Price", value: "$24,500.50" },
    { label: "Closing Price", value: "$23,320.50" },
    { label: "Volume", value: "$100,000,000.00" },
  ];

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        p: 2,
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "white",
          mb: 2,
        }}
      >
        Bitcoin Chain
      </Typography>

     

      <BitcoinChainBook />
    </Box>
  );
};

export default BitcoinChain;
