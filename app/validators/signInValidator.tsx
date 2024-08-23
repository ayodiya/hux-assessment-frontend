import * as Yup from "yup";

export const PASSWORD = "password";
export const PASSWORD_LABEL = "Password";

export const EMAIL = "email";
export const EMAIL_LABEL = "Email";

export default Yup.object({
  [EMAIL]: Yup.string().label(EMAIL_LABEL).email("Invalid email").required(),
  [PASSWORD]: Yup.string().label(PASSWORD_LABEL).required(),
});
