import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from "@/theme/theme";
import Navbar from "@/components/Navbar"; // We will build this next
import Footer from "@/components/Footer"; // We will build this next

export const metadata: Metadata = {
  title: "AWS Cloud Club DTU",
  description: "Building Cloud-Native Minds at DTU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kicksstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}