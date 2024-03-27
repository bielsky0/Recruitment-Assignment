import { Box } from "@mui/material";
import logo from "src/assets/logo2.png";

export const Logo = () => {
  return (
    <Box
      component="img"
      sx={{
        width: 90,
        maxWidth: { xs: 70, md: 90 },
      }}
      src={logo}
    />
  );
};
