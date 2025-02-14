import * as Yup from "yup";

export const loginSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "At Least 6 symbols"),
});

