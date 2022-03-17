import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/common/theme/theme";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./app.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
