"use client";
import { Open_Sans } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: openSans.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#ffff",
    },
    secondary: {
      main: "#000",
    },
  },
});

export default theme;
