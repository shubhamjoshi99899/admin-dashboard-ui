import { createTheme } from "@mui/material";
import { green, grey, red, yellow } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F59322",
      light: "#EAEAF4",
    },
    secondary: {
      main: "#EFD700",
    },
    success: {
      main: green[800],
    },
    warning: {
      main: yellow[800],
    },
    error: {
      main: red[800],
    },
  },
});

export default theme;
