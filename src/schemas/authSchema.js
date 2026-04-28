import * as yup from "yup";

const mobileRegex = /^(\+966\s?)?5\d{8}$/;

export const loginSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .required("Full name is required")
    .min(2, "Full name must be at least 2 characters"),
  mobileNumber: yup
    .string()
    .trim()
    .required("Mobile number is required")
    .matches(mobileRegex, "Enter a valid mobile number"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});
