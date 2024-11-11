import React from "react";
import Box from "@mui/material/Box";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import {
  AppBar,
  Avatar,
  Badge,
  Input,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

function Navbar() {
  const Logo = styled("h1")(({ theme }) => ({
    display: "none",
    fontWeight: "900",
    fontSize: "3rem",
    [theme.breakpoints.up("sm")]: { display: "block" },
  }));
  const LogoIcon = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("sm")]: { display: "none" },
  }));
  const NavBar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    //using sm:small screen breakpoint
    [theme.breakpoints.down("sm")]: { gap: "0.5rem" },
  }));
  const Search = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1%",
    backgroundColor: "white",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    padding: "0 10px",
  }));
  const Badges = styled(Box)(({ theme }) => ({
    width: "11%",
    display: "flex",
    justifyContent: "space-between",
    //using custome width
    ["@media (max-width:800px)"]: { display: "none" },
  }));
  const Username = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    fontSize: "1rem",
    [theme.breakpoints.up("sm")]: { fontSize: "1.5rem" },
  }));
  return (
    <Box>
      <AppBar position="sticky">
        <NavBar>
          <LogoIcon>
            <LogoDevIcon sx={{ fontSize: "2.5rem" }} />
          </LogoIcon>
          <Logo>MAH</Logo>
          <Search>
            <SearchIcon sx={{ color: "gray" }} />
            <Input placeholder="Search..." />
          </Search>
          <Badges>
            <Badge color="secondary" badgeContent={3}>
              <MailIcon fontSize="large" />
            </Badge>
            <Badge color="secondary" badgeContent={10} max={9}>
              <NotificationsIcon fontSize="large" />
            </Badge>
          </Badges>
          <Box
            direction="row"
            alignItems={"center"}
            gap={"1rem"}
            sx={{ display: "flex" }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://media.licdn.com/dms/image/v2/D4D03AQGXzd6r8QRZpw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707862681011?e=1736985600&v=beta&t=R_MMfIz4add5gdbY2I7due0zHa5NW9G35Y9ypav52eg"
              sx={{
                width: { xs: "50px", sm: "60px", md: "60px", lg: "65px" },
                height: { xs: "50px", sm: "60px", md: "60px", lg: "65px" },
              }}
            />
            <Username>Med-Amine</Username>
          </Box>
        </NavBar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
