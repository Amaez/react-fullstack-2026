// Base component generated using AI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export const TopBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const pages = ["Menu", "About Us"];

  const handleOpenNavMenu = (event: any): void => {
    console.log({ event });
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{
            background: "#ff569d",
          }}
          className="topAppBar"
        >
          <Toolbar>
            {/* Logo / Brand */}
            <Box style={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Monoton",
                  fontStyle: "normal",
                }}
              >
                Pely's Ice Cream Parlor
                <Typography variant="caption" marginLeft={"1vw"}>
                  <i>since 1977</i>
                </Typography>
              </Typography>
            </Box>

            {/* Desktop Menu */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 2,
              }}
            >
              {pages.map((page) => (
                <Button key={page} color="inherit">
                  {page}
                </Button>
              ))}
            </Box>

            {/* Mobile Menu Icon */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseNavMenu}
                sx={{
                  // color: "#750031",
                  "& .MuiList-root": { background: "#fad5e3" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    {page}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
