import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Input = ({ label, field, form: { touched, errors }, ...props }) => {
  const isError = touched[field.name] && errors[field.name];

  return (
    <Box
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        {...field}
        {...props}
        label="Write Todo"
        variant="outlined"
        error={!!isError}
        helperText={isError ? errors[field.name] : ""}
      />
    </Box>
  );
};

export default Input;
