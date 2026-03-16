import * as Yup from "yup";
export const schema = Yup.object({
  email: Yup.string().email("Email is not valid").required("Required"),
  password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
});
