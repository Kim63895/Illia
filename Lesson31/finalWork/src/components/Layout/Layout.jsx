import { Outlet, useLocation } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  Container,
  CssBaseline,
} from "@mui/material";
import { Header } from "../Header/Header";
import { green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: green[700],
    },
  },
});

const Layout = () => {
  const location = useLocation();

  const shouldHideHeader = () => {
    const hideHeaderRoutes = ["/login"];

    return hideHeaderRoutes.includes(location.pathname);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!shouldHideHeader() && <Header />}
      <Container sx={{ mt: "20px" }}>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};
export default Layout;
