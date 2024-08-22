import Grid from "@mui/material/Grid";

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
  return (
    <Grid container spacing={2}>
      {dummyCardItems.map((item, index) => (
        <Grid key={index} item xs={12} md={3}>
          <ContactCard key={index} contactDetails={item} />
        </Grid>
      ))}
    </Grid>
  );
}
