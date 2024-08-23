"use client";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";

import ButtonCom from "../components/ButtonCom";
import ContactCard from "../components/ContactCard";

const dummyCardItems = [
  {
    name: "Ayodeji Oludiya",
    email: "devayodiya@gmail.com",
    phoneNo: "08106801274",
  },
  {
    name: "Ayodeji Oludiya",
    email: "devayodiya@gmail.com",
    phoneNo: "08106801274",
  },
  {
    name: "Ayodeji Oludiya",
    email: "devayodiya@gmail.com",
    phoneNo: "08106801274",
  },
  {
    name: "Ayodeji Oludiya",
    email: "devayodiya@gmail.com",
    phoneNo: "08106801274",
  },
  {
    name: "Ayodeji Oludiya",
    email: "devayodiya@gmail.com",
    phoneNo: "08106801274",
  },
  {
    name: "Ayodeji Oludiya",
    email: "devayodiya@gmail.com",
    phoneNo: "08106801274",
  },
  {
    name: "Ayodeji Oludiya",
    email: "devayodiya@gmail.com",
    phoneNo: "08106801274",
  },
  {
    name: "Ayodeji Oludiya",
    email: "devayodiya@gmail.com",
    phoneNo: "08106801274",
  },
];

export default function ContactList() {
  const router = useRouter();

  return (
    <Box>
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
      <Grid container spacing={2}>
        {dummyCardItems.map((item, index) => (
          <Grid key={index} item xs={12} md={3}>
            <ContactCard key={index} contactDetails={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
