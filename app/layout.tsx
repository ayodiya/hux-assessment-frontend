import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import NavDrawer from "./components/NavDrawer";
import theme from "../utils/theme";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contact App",
  description: "Contact App by Ayodeji Oludiya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Box sx={{ fontFamily: "Open Sans" }}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <Container maxWidth="lg">
                <NavDrawer />
                {children}
              </Container>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </Box>
      </body>
    </html>
  );
}
