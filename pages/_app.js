import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { init } from "@emailjs/browser";

// Initialize emailjs lib
init("user_BLQMNLMuIbHGtGh5Gktsy");

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
