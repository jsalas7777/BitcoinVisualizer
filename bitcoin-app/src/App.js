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
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import StockChart from "./Stockchart";
import OrderBook from "./Orderbook";

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

          <Grid
            spacing={2}
            container
            sx={{
              padding: 4,
            }}
          >
            <Grid item xs={6} sm={3} md={3}>
              <Card
                sx={{
                  maxWidth: 150,
                  backgroundColor: "#1f2937", // dark gray
                  color: "#f9fafb",
                  borderRadius: 2,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Typography variant="body1" fontWeight="bold">
                    Current Price
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1, color: "#10b981" }}>
                    $24,320.50
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={3} md={3}>
              <Card
                sx={{
                  maxWidth: 150,
                  backgroundColor: "#1f2937", // dark gray
                  color: "#f9fafb",
                  borderRadius: 2,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Typography variant="body1" fontWeight="bold">
                    Opening Price
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1, color: "#10b981" }}>
                    $24,500.50
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={3} md={3}>
              <Card
                sx={{
                  maxWidth: 150,
                  backgroundColor: "#1f2937", // dark gray
                  color: "#f9fafb",
                  borderRadius: 2,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Typography variant="body1" fontWeight="bold">
                    Closing Price
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1, color: "#10b981" }}>
                    $23,320.50
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={3} md={3}>
              <Card
                sx={{
                  maxWidth: 150,
                  backgroundColor: "#1f2937", // dark gray
                  color: "#f9fafb",
                  borderRadius: 2,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Typography variant="body1" fontWeight="bold">
                    Volume
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1, color: "#10b981" }}>
                    $100,000,000.00
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>


          <StockChart></StockChart>

          <OrderBook></OrderBook>


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
