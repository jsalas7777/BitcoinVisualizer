import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import StockChart from "./Stockchart";
import OrderBook from "./Orderbook";
import HashrateChart from "./HashrateChart";

const BitcoinHashrate = () => {
  const stats = [
    { label: "Current Hashrate", value: "55,000,000TH/s" },
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
        Bitcoin Hashrate
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

      <HashrateChart />
    </Box>
  );
};

export default BitcoinHashrate;
