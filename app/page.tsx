"use client";

import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("contactAppToken") !== null) {
      router.push("/contacts");
    }
  }, [router]);

  return (
    <Box sx={{ color: "white", fontSize: "24px", textAlign: "center" }}>
      A simple App that allows you to add contacts, view and edit them.
    </Box>
  );
}
