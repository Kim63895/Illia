import { Container, Box } from "@mui/material";
import LoginForm from "../../components/LoginForm/LoginForm";
import { containerStyles, boxStyles } from "./StyleLogin";

const Login = () => (
  <Container sx={containerStyles}>
    <Box sx={boxStyles}>
      <LoginForm />
    </Box>
  </Container>
);

export default Login;
