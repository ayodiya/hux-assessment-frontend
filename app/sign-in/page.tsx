"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import Link from "next/link";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("contactAppToken") !== null) {
      router.push("/contacts");
    }
  }, [router]);

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
          onSubmit={async (values, { resetForm }) => {
            try {
              const { data } = await axios.post(
                `${process.env.NEXT_PUBLIC_TEST_URL}/auth/login`,
                { ...values },
                {
                  headers: {
                    "Content-Type": "application/json", // Set the content type header
                  },
                },
              );

              Notify.success(data.message);
              localStorage.setItem("contactAppToken", data.token);
              localStorage.setItem(
                "contactAppUserDetails",
                JSON.stringify(data.userDetails),
              );
              router.push("/contacts");
            } catch (error: any) {
              Notify.failure(error.response.data.msg);
            }
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
                  <ButtonCom
                    type="submit"
                    backgroundColor="#34a853"
                    text={isSubmitting ? <CircularProgress /> : "Submit"}
                  />
                </Box>
                <Link href="/sign-up">
                  <Box
                    sx={{
                      paddingTop: "30px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Not registered? SIGN UP
                  </Box>
                </Link>
              </Stack>
            </Box>
          )}
        </Formik>
      </Box>
    </Box>
  );
}
