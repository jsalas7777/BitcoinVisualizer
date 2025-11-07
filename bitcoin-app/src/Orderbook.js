// OrderBook.js
import React from "react";
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const bids = [
  { price: 68000.5, amount: 0.42 },
  { price: 67990.3, amount: 0.5 },
  { price: 67985.1, amount: 1.1 },
];

const asks = [
  { price: 68010.7, amount: 0.35, ordertype: "Sell" },
  { price: 68020.9, amount: 0.25, ordertype: "Buy" },
  { price: 68030.4, amount: 0.75, ordertype: "Sell" },
];

export default function OrderBook() {
  const tableStyle = {
    backgroundColor: "#111827",
    color: "#f9fafb",
  };

  const headStyle = {
    fontWeight: 700,
    color: "#9ca3af",
  };

  return (
    <Box
      sx={{
        color: "#f9fafb",
        p: 2,
        borderRadius: 2,
        width: "100%",
      }}
    >
      <Typography
        variant="h6"
        align="center"
        sx={{ mb: 2, fontWeight: "bold", color: "black" }}
      >
        Order Book
      </Typography>

      <TableContainer sx={{ backgroundColor: "#1e293b" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={headStyle}>Price (USD)</TableCell>
              <TableCell sx={headStyle}>Amount (BTC)</TableCell>
              <TableCell sx={headStyle}>Order Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {asks.map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={{ color: "#ffffff" }}>
                  {row.price.toLocaleString()}
                </TableCell>
                <TableCell sx={tableStyle}>{row.amount}</TableCell>
                <TableCell  sx={{ color: "#ffffff" }}>{row.ordertype}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
