import { Formik, Form, Field } from "formik";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../schemas/LoginSchema";
import { boxStyles } from "./LofinFormStyle"; 
import Icon from "../Icons/Icon";

const login = import.meta.env.VITE_LOGIN;
const password = import.meta.env.VITE_PASSWORD;

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  

  
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };



  const onSubmit = (values, { setSubmitting, setErrors }) => {
    if (values.name === login && values.password === password) {
      navigate("/products");
    } else {
      setErrors({ name: "Невірний логін або пароль" });
    }
    setSubmitting(false); 
  };

  return (
    <Formik
      initialValues={{ name: "", password: "" }}
      onSubmit={onSubmit}
      validationSchema={loginSchema}
    >
      {({ isSubmitting, errors }) => (
        <Form>
          <Box sx={boxStyles}>
            <Icon />

            <Typography variant="h6" mb={2} align="center">
              Вхід у систему
            </Typography>


            <Field name="name">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  fullWidth
                  placeholder="Enter login"
                  label="Логін"
                  error={meta.touched && Boolean(meta.error)}
                  helperText={meta.touched && meta.error}
                  variant="outlined"
                  margin="normal"
                />
              )}
            </Field>

            <Field name="password">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  label="Пароль"
                  error={meta.touched && Boolean(meta.error)}
                  helperText={meta.touched && meta.error}
                  variant="outlined"
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={togglePasswordVisibility}
                          edge="end"
                          aria-label={
                            showPassword ? "Hide password" : "Show password"
                          }
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            </Field>

            {errors.name && (
              <Typography color="error" align="center" mt={1}>
                {errors.name}
              </Typography>
            )}

            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={isSubmitting}
              sx={{ mt: 2 }}
            >
              {isSubmitting ? "Вхід..." : "Увійти"}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
