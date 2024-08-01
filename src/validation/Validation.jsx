import * as Yup from "yup";

export const signup = Yup.object({
  fullName: Yup.string()
    .min(3)
    .max(10)
    .required("Please enter your first name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .min(8)
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
      "Please enter atleast 1 special character"
    )
    .required("Please enter your password"),
});
