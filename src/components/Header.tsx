// src/components/Header.tsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  Select,
  MenuItem,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FilterListIcon from "@mui/icons-material/FilterList";
import Filter from "./Filter";

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <Box display="flex" alignItems="center" flexGrow={1}>
        <Typography
          variant="h4"
          component="div"
          fontWeight={600}
          p={3}
          sx={{ flexGrow: 1, marginLeft: 2, color: "#000" }}
        >
          Inventory
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" ml={2}>
        <Typography variant="body1" component="div" sx={{ marginRight: 1 }}>
          Select Dealer
        </Typography>
        <Select value="AAA MITSUBISHI DEALER" onChange={() => {}}>
          <MenuItem value="AAA MITSUBISHI DEALER">
            AAA MITSUBISHI DEALER
          </MenuItem>
          {/* Add more options here */}
        </Select>
      </Box>
      <Button
        variant="outlined"
        startIcon={<FilterListIcon sx={{ color: "#F59322" }} />}
        sx={{ m: 2, height: 60, color: "#000", border: "1px solid #f0f0f0" }}
        onClick={toggleDrawer(true)}
      >
        FILTER DATA BY
      </Button>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box p={2} width="500px">
          <Filter />
        </Box>
      </Drawer>
    </Stack>
  );
};

export default Header;
