import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";
import { useState } from "react";

import ButtonCom from "./ButtonCom";
import DeleteDialog from "./DeleteDialog";

// Define the interface for the props
interface ContactDetails {
  name: string;
  email: string;
  phoneNo: string;
}

// Define the props type for the ContactCard component
interface ContactCardProps {
  contactDetails: ContactDetails;
}

export default function ContactCard({ contactDetails }: ContactCardProps) {
  const router = useRouter();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handleDeleteDialog = () => {
    setOpenDeleteDialog(!openDeleteDialog);
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
                {contactDetails?.name?.charAt(0)}
              </Avatar>
            </Box>
            <Stack
              padding="30px"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Box>{contactDetails?.name}</Box>
              <Box>{contactDetails?.email}</Box>
              <Box>{contactDetails?.phoneNo}</Box>
            </Stack>
          </CardContent>
          <CardActions>
            <ButtonCom
              onClick={() => router.push("/contacts/edit-contact")}
              backgroundColor="#ffb400"
              text="Edit"
            />
            <ButtonCom
              onClick={handleDeleteDialog}
              backgroundColor="#e74c3c"
              text="Delete"
            />
          </CardActions>
        </Card>
      </Box>
      <DeleteDialog
        handleDeleteDialog={handleDeleteDialog}
        openDeleteDialog={openDeleteDialog}
      />
    </>
  );
}
