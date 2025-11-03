import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";

function App() {
  const [selection, setSelection] = useState(null);

  const [price, setPrice] = useState("Price");

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch("http://localhost:5001/bitcoin-price");
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

  const drawerWidth = 240;

  const contentView = () => {

    if (selection === "Price") {
      return (
        <div>
          <Typography variant="h4" gutterBottom>
            Bitcoin Price
          </Typography>
          <Typography variant="h6">Current Price: ${price}</Typography>
        </div>
      );
    }
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        {/* Sidebar */}
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#111827", // dark background
              color: "#f9fafb", // light text
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Typography variant="h6" sx={{ p: 2, textAlign: "center" }}>
            Menu
          </Typography>

          <List>
            <ListItem key={"Price"} disablePadding>
              <ListItemButton
                sx={{
                  borderRadius: 1,
                  mx: 1,
                  "&:hover": {
                    backgroundColor: "#1f2937",
                  },
                }}
                onClick={() => {
                  setSelection("Price");
                }}
              >
                <ListItemText primary={"Price"} />
              </ListItemButton>
            </ListItem>

            <ListItem key={"Chain"} disablePadding>
              <ListItemButton
                sx={{
                  borderRadius: 1,
                  mx: 1,
                  "&:hover": {
                    backgroundColor: "#1f2937",
                  },
                }}
                onClick={() => {
                  setSelection("Chain");
                }}
              >
                <ListItemText primary={"Chain"} />
              </ListItemButton>
            </ListItem>

            <ListItem key={"Hashrate"} disablePadding>
              <ListItemButton
                sx={{
                  borderRadius: 1,
                  mx: 1,
                  "&:hover": {
                    backgroundColor: "#1f2937",
                  },
                }}
                onClick={() => {
                  setSelection("Hashrate");
                }}
              >
                <ListItemText primary={"Hashrate"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>

        {/* Main content */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {contentView()}
        </Box>
      </Box>
    </div>
  );
}

export default App;
