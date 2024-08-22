"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Formik } from "formik";

import InputField from "../components/InputField";
import ButtonCom from "../components/ButtonCom";

import signInValidator, {
  PASSWORD,
  PASSWORD_LABEL,
  EMAIL,
  EMAIL_LABEL,
} from "../validators/signInValidator";

const initialValues = {
  [PASSWORD]: "",
  [EMAIL]: "",
};

export default function SignUp() {
  return (
    <Box sx={{ color: "white" }}>
      <Box
        sx={{
          fontSize: { xs: "30px", md: "50px" },
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
        }}
      >
        SIGN IN
      </Box>
      <Box
        sx={{
          paddingTop: "30px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={signInValidator}
          onSubmit={async (values) => {
            console.log("this is testing", values);
          }}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            touched,
            isSubmitting,
            setFieldValue,
            handleBlur,
            values,
          }) => (
            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <Stack spacing={2}>
                <Box sx={{ width: "300px" }}>
                  <InputField
                    name={EMAIL}
                    error={errors[EMAIL]}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label={EMAIL_LABEL}
                  />
                </Box>
                <Box sx={{ width: "300px" }}>
                  <InputField
                    type="password"
                    name={PASSWORD}
                    error={errors[PASSWORD]}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label={PASSWORD_LABEL}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <ButtonCom backgroundColor="#34a853" text="Submit" />
                </Box>
              </Stack>
            </Box>
          )}
        </Formik>
      </Box>
    </Box>
  );
}
