"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { Formik } from "formik";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

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

// Define an interface for contact details
interface ContactDetails {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
}

export default function EditContact() {
  const router = useRouter();
  const { slug } = useParams<{ slug: string }>();
  const [loading, setLoading] = useState<boolean>(false);
  const [contactDetail, setContactDetail] = useState<ContactDetails | null>(
    null,
  );

  const getContactDetail = async (slug: string) => {
    setLoading(true);

    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_TEST_URL}/contact/${slug}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("contactAppToken")}`,
          },
        },
      );

      setContactDetail(data?.contactDetails);
    } catch (error: any) {
      Notify.failure(error.response.data.msg);
    }
    setLoading(false);
  };

  useEffect(() => {
    getContactDetail(slug);
  }, [slug]);

  console.log("this is dance", contactDetail);

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
        EDIT CONTACT
      </Box>
      {loading && (
        <Box
          sx={{
            minHeight: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {!loading && (
        <Box
          sx={{
            paddingTop: "30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Formik
            initialValues={{
              [FIRST_NAME]: contactDetail?.firstName,
              [LAST_NAME]: contactDetail?.lastName,
              [PHONE_NUMBER]: contactDetail?.phoneNo,
              [EMAIL]: contactDetail?.email,
            }}
            validationSchema={addContactValidator}
            onSubmit={async (values) => {
              try {
                const { data } = await axios.patch(
                  `${process.env.NEXT_PUBLIC_TEST_URL}/contact/${slug}`,
                  { ...values },
                  {
                    headers: {
                      "Content-Type": "application/json", // Set the content type header
                      Authorization: `Bearer ${localStorage.getItem("contactAppToken")}`,
                    },
                  },
                );

                Notify.success(data.message);
                router.push("/contacts");
              } catch (error: any) {
                if (error.response.data.errors.length > 0) {
                  Notify.failure(JSON.stringify(error.response.data.errors[0]));
                }
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
                      name={FIRST_NAME}
                      value={values[FIRST_NAME]}
                      error={errors[FIRST_NAME]}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label={FIRST_NAME_LABEL}
                    />
                  </Box>
                  <Box sx={{ width: "300px" }}>
                    <InputField
                      name={LAST_NAME}
                      value={values[LAST_NAME]}
                      error={errors[LAST_NAME]}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label={LAST_NAME_LABEL}
                    />
                  </Box>
                  <Box sx={{ width: "300px" }}>
                    <InputField
                      name={EMAIL}
                      value={values[EMAIL]}
                      error={errors[EMAIL]}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label={EMAIL_LABEL}
                    />
                  </Box>
                  <Box sx={{ width: "300px" }}>
                    <InputField
                      name={PHONE_NUMBER}
                      value={values[PHONE_NUMBER]}
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
                    <ButtonCom
                      type="submit"
                      backgroundColor="#34a853"
                      text={isSubmitting ? <CircularProgress /> : "Submit"}
                    />
                  </Box>
                </Stack>
              </Box>
            )}
          </Formik>
        </Box>
      )}
    </Box>
  );
}
