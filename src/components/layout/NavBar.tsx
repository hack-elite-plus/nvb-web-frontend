import {
  Toolbar,
  IconButton,
  Typography,
  Button,
  AppBar,
  Container,
  Stack,
  Slide,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import Hamburger from "./../utils/Hamburger";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const nimbusVentureHome = "https://nimbusventure.com/";
const nimbusMenuItems = ["Products", "Solutions", "Contact Us", "About Us"];
const nimbusMenuLinks = [
  "https://nimbusventure.com/index.php/products-we-offer/",
  "https://nimbusventure.com/index.php/solutions-we-provide/",
  "https://nimbusventure.com/#contact",
  "https://nimbusventure.com/#about",
  "",
];

const drawerWidth = {
  xs: "60%",
  sm: "400px",
};

const drawer = (
  <Stack height="100%" direction="column" sx={{ textAlign: "center" }}>
    <Button href={nimbusVentureHome} target="_blank" rel="noopener">
      <Typography variant="h6" sx={{ my: 2 }}>
        Nimbus Venture
      </Typography>
    </Button>

    <Divider />
    <List sx={{ margin: "auto" }}>
      {nimbusMenuItems.map((item, index) => (
        <ListItem key={item} disablePadding sx={{ my: 3 }}>
          <ListItemButton
            sx={{ textAlign: "center" }}
            href={nimbusMenuLinks[index]}
            target="_blank"
            rel="noopener"
          >
            <ListItemText primary={item} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Stack>
);

interface NavBarInterface {
  setSignInShow: React.Dispatch<React.SetStateAction<boolean>>;
  toggleColorMode: () => void;
}

const NavBar: React.FC<NavBarInterface> = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [navOpen, setNavOpen] = useState(false);

  const { toggleColorMode, setSignInShow } = props;

  const handleSignIn = () => setSignInShow(true);
  const handleHamburgerToggle = () => setNavOpen((prev) => !prev);

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Container maxWidth="lg" sx={{ position: "relative" }}>
      <Box>
        <AppBar position="static" elevation={0} color="transparent">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="Side Navbar Menu"
              sx={{ mr: 2 }}
              onClick={handleHamburgerToggle}
            >
              <Hamburger />
            </IconButton>

            <Button href={nimbusVentureHome} target="_blank" rel="noopener">
              <Typography
                variant="h6"
                component="div"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Nimbus
              </Typography>
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              spacing={3}
              height="100%"
              margin="auto"
            >
              {nimbusMenuItems.map((item, index) => (
                <Box key={index} sx={{ display: { xs: "none", lg: "flex" } }}>
                  <Slide
                    direction="down"
                    in={navOpen}
                    style={{
                      transitionDuration: "350ms",
                      transitionDelay: navOpen
                        ? `${60 * (index - 1)}ms`
                        : "0ms",
                    }}
                  >
                    <Button
                      href={nimbusMenuLinks[index]}
                      target="_blank"
                      rel="noopener"
                    >
                      {item}
                    </Button>
                  </Slide>
                </Box>
              ))}
            </Stack>

            <Stack direction="row">
              <IconButton
                size="large"
                edge="start"
                aria-label="theme"
                color="primary"
                sx={{ mr: 2 }}
                onClick={toggleColorMode}
              >
                {theme.palette.mode === "dark" ? (
                  <DarkModeIcon />
                ) : (
                  <LightModeIcon />
                )}
              </IconButton>

              <Button sx={{ display: { xs: "none", sm: "flex" } }}>Join</Button>
              <Button onClick={handleSignIn}>Login</Button>
            </Stack>
          </Toolbar>
        </AppBar>

        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={navOpen && isMobile}
            onClose={handleHamburgerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", lg: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </Container>
  );
};

export default NavBar;
