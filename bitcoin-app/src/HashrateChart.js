"use client";
import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { Box, Typography } from "@mui/material";

export default function HashrateChart({ symbol = "Bitcoin" }) {
  const [option, setOption] = useState({});

  useEffect(() => {
    const data = [120, 130, 128, 140, 138];
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
      },
      xAxis: {
        type: "category",
        data: dates,
        axisLine: { lineStyle: { color: "#9ca3af" } },
        axisLabel: { color: "#d1d5db" },
      },
      yAxis: {
        type: "value",
        axisLine: { lineStyle: { color: "#9ca3af" } },
        splitLine: { lineStyle: { color: "#1f2937" } },
        axisLabel: { color: "#d1d5db" },
      },
      series: [
        {
          name: "Value",
          type: "line",
          data,
          smooth: false, // keep it linear
          lineStyle: {
            color: "#3b82f6", // blue line
            width: 2,
          },
          symbol: "none", // no dots
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
        {symbol} Hashrate Chart
      </Typography>
      <ReactECharts option={option} style={{ height: "400px", width: "100%" }} />
    </Box>
  );
}
