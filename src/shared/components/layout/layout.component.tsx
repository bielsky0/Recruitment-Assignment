import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

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
                variant="h1"
                noWrap
                sx={{
                  mr: 2,
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontSize: 26,
                  fontWeight: 700,
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Recruitment Assignment by Jakub Bielski
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Typography
                variant="h1"
                sx={{
                  mr: 2,
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Recruitment Assignment by Jakub Bielski
              </Typography>
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
