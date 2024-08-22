import * as Yup from "yup";

export const FIRST_NAME = "firstName";
export const FIRST_NAME_LABEL = "First Name";

export const LAST_NAME = "lastName";
export const LAST_NAME_LABEL = "Last Name";

export const PHONE_NUMBER = "phoneNo";
export const PHONE_NUMBER_LABEL = "Phone Number";

export const PASSWORD = "password";
export const PASSWORD_LABEL = "Password";

export const EMAIL = "email";
export const EMAIL_LABEL = "Email";

export default Yup.object({
  [FIRST_NAME]: Yup.string().label(FIRST_NAME_LABEL).required(),
  [LAST_NAME]: Yup.string().label(LAST_NAME_LABEL).required(),
  [PHONE_NUMBER]: Yup.string().label(PHONE_NUMBER_LABEL).required(),
  [EMAIL]: Yup.string().label(EMAIL_LABEL).email("Invalid email").required(),
  [PASSWORD]: Yup.string().label(PASSWORD_LABEL).required(),
});
