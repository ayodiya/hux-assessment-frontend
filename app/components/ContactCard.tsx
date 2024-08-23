"use client";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useRouter } from "next/navigation";
import { useState } from "react";

import ButtonCom from "./ButtonCom";

// Define the interface for the props
interface ContactDetails {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  slug: string;
}

// Define the props type for the ContactCard component
interface ContactCardProps {
  contactDetails: ContactDetails;
  getContacts: () => Promise<void>;
}

export default function ContactCard({
  contactDetails,
  getContacts,
}: ContactCardProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const deleteContact = async (slug: string) => {
    setLoading(true);

    try {
      const { data } = await axios.delete(
        `${process.env.NEXT_PUBLIC_TEST_URL}/contact/${slug}`,
        {
          headers: {
            "Content-Type": "application/json", // Set the content type header
            Authorization: `Bearer ${localStorage.getItem("contactAppToken")}`,
          },
        },
      );

      await getContacts();
      Notify.success(data.message);
      router.push("/contacts");
    } catch (error: any) {
      Notify.failure(error.response.data.msg);
    }

    setLoading(false);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            width: 300,
            borderRadius: "8px",
            color: "#333333",
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Avatar sx={{ width: 56, height: 56 }}>
                {contactDetails?.firstName?.charAt(0).toLocaleUpperCase()}
              </Avatar>
            </Box>
            <Stack
              padding="30px"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Box>
                {contactDetails?.firstName} {contactDetails?.lastName}
              </Box>
              <Box>{contactDetails?.email}</Box>
              <Box>{contactDetails?.phoneNo}</Box>
            </Stack>
          </CardContent>
          <CardActions>
            <ButtonCom
              onClick={() =>
                router.push(`/contacts/edit-contact/${contactDetails?.slug}`)
              }
              backgroundColor="#ffb400"
              text="Edit"
            />
            <ButtonCom
              disabled={loading}
              onClick={() => deleteContact(contactDetails?.slug)}
              backgroundColor="#e74c3c"
              text={loading ? <CircularProgress /> : "Delete"}
            />
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
