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


const transactions = [
  {
    "amount": 250.75,
    "hash": "0xa4c3b12e98f7a0d3b1f5c7f9e3a45bd21c8f6e2b",
    "date": "2025-11-01T10:32:15Z"
  },
  {
    "amount": 1200.00,
    "hash": "0xb72f3e89c54d9a23e8a7d3c1f54e90ab12d3c4f9",
    "date": "2025-11-01T12:45:30Z"
  },
  {
    "amount": -480.50,
    "hash": "0xc4e1b8a32f9d8b12a74c1e3d59b5c8d9f2a1b7e4",
    "date": "2025-11-02T08:10:44Z"
  },
  {
    "amount": 35.20,
    "hash": "0xd7f3a8c1b2e4d9f8a1b7c5e9f3d2a6b9c8e4f5d3",
    "date": "2025-11-02T13:25:12Z"
  },
  {
    "amount": 999.99,
    "hash": "0xe2b7c4f8a9d1b3e7c5f9a2d6b8c4f3e1d7a9c2b5",
    "date": "2025-11-03T09:00:05Z"
  },
  {
    "amount": -250.00,
    "hash": "0xf3e1d2a9b7c4f8a5e9d3b1c7f2a6b9c8d1e4f5a2",
    "date": "2025-11-03T11:47:59Z"
  },
  {
    "amount": 412.35,
    "hash": "0xa2d9b7c8e4f3a1d5b6c9f8a2e7b4d1c3f9e5a7b6",
    "date": "2025-11-04T14:20:33Z"
  },
  {
    "amount": 760.10,
    "hash": "0xb8f5a2c3e4d9b7a1f2c6e9d3b5f4a7c8e1d2b9f0",
    "date": "2025-11-05T16:02:41Z"
  },
  {
    "amount": -120.00,
    "hash": "0xc5e4a7d9f2b3c8e1a9f7b6d2c4e5a3f9b8d1c2e0",
    "date": "2025-11-06T07:55:28Z"
  },
  {
    "amount": 50.00,
    "hash": "0xd9a1b7c3e8f5a2d4b6f9e7c1a3f4b8d2e5c9a0f1",
    "date": "2025-11-07T19:18:50Z"
  },
  {
    "amount": 875.60,
    "hash": "0xe4b3a8f1d9c7e2b5f6a0c4d8b9f2e3a1c7d5b8f4",
    "date": "2025-11-08T21:47:17Z"
  },
  {
    "amount": -60.25,
    "hash": "0xf2a9b4c8d1e7f3a5b6c0e9d2a8f4b7c3e1d5a0b9",
    "date": "2025-11-09T10:11:09Z"
  }
];


export default function BitcoinChainBook() {
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
        sx={{ mb: 2, fontWeight: "bold", color: "white" }}
      >
        Current Transcations
      </Typography>

      <TableContainer sx={{ backgroundColor: "#1e293b" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={headStyle}>BTC</TableCell>
              <TableCell sx={headStyle}>Hash</TableCell>
              <TableCell sx={headStyle}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={{ color: "#ffffff" }}>
                  {row.amount.toLocaleString()}
                </TableCell>
                <TableCell sx={tableStyle}>{row.hash}</TableCell>
                <TableCell  sx={{ color: "#ffffff" }}>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
