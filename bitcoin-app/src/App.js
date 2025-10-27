import logo from "./logo.svg";
import "./App.css";
import { Button, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";


function App() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch(
          "http://localhost:5001/bitcoin-price"
        );
        const data = await response.json();


         if (data && data.price) {
          const price = data.price;
          setPrice(price);
        }

      } catch (error) {
        console.error("Failed to fetch price", error);
      }
    };

    fetchPrice();
  }, []);

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "black", // set background to black
          minHeight: "100vh", // full screen height
          color: "white", // text color white
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" gutterBottom>
          Bitcoin Price Tracker
        </Typography>
        <Typography variant="h4">Current Price: ${price}</Typography>
      </Box>
    </div>
  );
}

export default App;
