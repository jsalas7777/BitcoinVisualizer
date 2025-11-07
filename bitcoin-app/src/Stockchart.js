"use client";
import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { Box, Typography } from "@mui/material";

export default function StockChart({ symbol = "Bitcoin" }) {
  const [option, setOption] = useState({});

  useEffect(() => {
    // Dummy candle data: [open, close, low, high]
    const data = [
      [120, 130, 118, 135],
      [130, 128, 125, 132],
      [128, 140, 127, 142],
      [140, 138, 135, 145],
      [138, 150, 136, 152],
    ];

    const dates = [
      "2025-11-01",
      "2025-11-02",
      "2025-11-03",
      "2025-11-04",
      "2025-11-05",
    ];

    const optionTemplate = {
      backgroundColor: "#111827",
      textStyle: { color: "#f9fafb" },
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "cross" },
      },
      xAxis: {
        type: "category",
        data: dates,
        axisLine: { lineStyle: { color: "#9ca3af" } },
      },
      yAxis: {
        scale: true,
        axisLine: { lineStyle: { color: "#9ca3af" } },
        splitLine: { lineStyle: { color: "#1f2937" } },
      },
      series: [
        {
          name: "Candles",
          type: "candlestick",
          data,
          itemStyle: {
            color: "#16a34a", // bullish
            color0: "#dc2626", // bearish
            borderColor: "#16a34a",
            borderColor0: "#dc2626",
          },
        },
      ],
    };

    setOption(optionTemplate);
  }, [symbol]);

  return (
    <Box
      sx={{
        backgroundColor: "#111827",
        padding: 2,
        borderRadius: 2,
        boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: "#f9fafb", mb: 1, textAlign: "center" }}
      >
        {symbol} Price Chart
      </Typography>
      <ReactECharts
        option={option}
        style={{ height: "400px", width: "100%" }}
      />
    </Box>
  );
}
