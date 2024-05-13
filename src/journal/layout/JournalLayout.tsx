import { Box, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../../ui";
import React from "react";

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth} />

      <SideBar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar /> {/* Me genera el espacio necesario del nabvar */}
        {children}
      </Box>
    </Box>
  );
};
