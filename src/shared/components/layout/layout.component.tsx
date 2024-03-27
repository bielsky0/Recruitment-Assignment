import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { Logo } from "src/shared/components/logo";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 2,
              }}
            >
              <Logo />
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: 2,
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Recruitment Assignment by Jakub Bielski
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                open={false}
                id="menu-appbar"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              ></Menu>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <Logo />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="md" sx={{ marginTop: 6, marginBottom: 6 }}>
        {children}
      </Container>
    </>
  );
};
