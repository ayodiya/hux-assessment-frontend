"use client";

import ContactCard from "@/app/components/ContactCard";

const contactDetails = {
  name: "Ayodeji Oludiya",
  email: "devayodiya@gmail.com",
  phoneNo: "08106801274",
};

export default function ContactDetails() {
  return <ContactCard contactDetails={contactDetails} />;
}
