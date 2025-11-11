import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import StockChart from "./Stockchart";
import OrderBook from "./Orderbook";

const BitcoinPrice = () => {
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
        Bitcoin Price
      </Typography>

      <Grid container spacing={2} sx={{ padding: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={6} sm={3} md={3} key={index}>
            <Card
              sx={{
                maxWidth: 150,
                backgroundColor: "#1f2937",
                color: "#f9fafb",
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                textAlign: "center",
              }}
            >
              <CardContent>
                <Typography variant="body1" fontWeight="bold">
                  {stat.label}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, color: "#10b981" }}>
                  {stat.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <StockChart />
      <OrderBook />
    </Box>
  );
};

export default BitcoinPrice;
