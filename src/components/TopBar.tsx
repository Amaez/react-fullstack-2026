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

  const pages = ["Menu", "About Us", "Contact"];

  const handleOpenNavMenu = (event: any): void => {
    console.log({ event });
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar sx={{ background: "#fc3c8c" }}>
        <Toolbar>
          {/* Logo / Brand */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              fontFamily: "Monoton",
              fontStyle: "normal",
            }}
          >
            <i>Pely's Ice Cream Parlor</i>
            <Typography variant="caption" marginLeft={"10px"}>
              <i>since 1958</i>
            </Typography>
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
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
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  {page}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Right Side Button */}
          <Button
            variant="contained"
            color="secondary"
            sx={{ ml: 2, display: { xs: "none", md: "inline-flex" } }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
