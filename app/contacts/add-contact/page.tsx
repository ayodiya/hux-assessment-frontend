"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Formik } from "formik";

import InputField from "@/app/components/InputField";
import ButtonCom from "@/app/components/ButtonCom";

import addContactValidator, {
  FIRST_NAME,
  FIRST_NAME_LABEL,
  LAST_NAME,
  LAST_NAME_LABEL,
  PHONE_NUMBER,
  PHONE_NUMBER_LABEL,
  EMAIL,
  EMAIL_LABEL,
} from "@/app/validators/addContactValidator";

const initialValues = {
  [FIRST_NAME]: "",
  [LAST_NAME]: "",
  [PHONE_NUMBER]: "",
  [EMAIL]: "",
};

export default function addContact() {
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
        ADD CONTACT
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
          validationSchema={addContactValidator}
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
                    name={FIRST_NAME}
                    error={errors[FIRST_NAME]}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label={FIRST_NAME_LABEL}
                  />
                </Box>
                <Box sx={{ width: "300px" }}>
                  <InputField
                    name={LAST_NAME}
                    error={errors[LAST_NAME]}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label={LAST_NAME_LABEL}
                  />
                </Box>
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
                    name={PHONE_NUMBER}
                    error={errors[PHONE_NUMBER]}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label={PHONE_NUMBER_LABEL}
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
