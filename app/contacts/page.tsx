"use client";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import ButtonCom from "../components/ButtonCom";
import ContactCard from "../components/ContactCard";
import greetUser from "../../utils/greetUser";

interface UserDetails {
  email: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
}

export default function ContactList() {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState<UserDetails>({
    email: undefined,
    firstName: undefined,
    lastName: undefined,
  });

  const [allContacts, setAllContacts] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getContacts = async () => {
    setLoading(true);

    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_TEST_URL}/contact/all`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("contactAppToken")}`,
          },
        },
      );

      setAllContacts(data?.allContacts);
    } catch (error: any) {
      Notify.failure(error.response.data.msg);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (localStorage.getItem("contactAppToken") === null) {
      router.push("/sign-in");
      return; // Exit early if no token is found
    }

    getContacts();

    const userDetailsString = localStorage.getItem("contactAppUserDetails");
    if (userDetailsString) {
      const getUserDetails = JSON.parse(userDetailsString);
      setUserDetails({
        email: getUserDetails?.email || "", // Provide a default value in case the field is undefined
        firstName: getUserDetails?.firstName || "",
        lastName: getUserDetails?.lastName || "",
      });
    }
  }, [router]);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "50px",
          fontSize: "34px",
          color: "white",
          fontWeight: 800,
          textAlign: "center",
        }}
      >
        {greetUser(userDetails?.firstName ?? "Guest")}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "50px",
        }}
      >
        <ButtonCom
          onClick={() => router.push("/contacts/add-contact")}
          text="Add Contact"
          backgroundColor="#34a853"
        />
      </Box>
      {allContacts.length < 1 && !loading && (
        <Box
          sx={{
            minHeight: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "34px",
          }}
        >
          No contact have been added
        </Box>
      )}
      {allContacts.length < 1 && loading && (
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
      {!loading && allContacts.length > 0 && (
        <>
          <Grid container spacing={2}>
            {allContacts.map((item, index) => (
              <Grid key={index} item xs={12} md={3}>
                <ContactCard
                  key={index}
                  contactDetails={item}
                  getContacts={getContacts}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
}
