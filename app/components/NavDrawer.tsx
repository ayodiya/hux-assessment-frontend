"use client";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useState } from "react";
import { useRouter } from "next/navigation";

const navItems = [
  {
    linkText: "HOME",
    link: "/",
    icon: <HomeIcon />,
  },
  {
    linkText: "CONTACTS",
    link: "/contacts",
    icon: <ContactsIcon />,
  },
  {
    linkText: "SIGN UP",
    link: "/sign-up",
    icon: <HowToRegIcon />,
  },
  {
    linkText: "SIGN IN",
    link: "/sign-in",
    icon: <LoginIcon />,
  },
  {
    linkText: "LOGOUT",
    link: "#",
    icon: <LogoutIcon />,
  },
];

export default function NavDrawer() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const logout = async () => {
    try {
      const { data } = await axios.delete(
        `${process.env.NEXT_PUBLIC_TEST_URL}/auth/logout`,
        {
          headers: {
            "Content-Type": "application/json", // Set the content type header
            Authorization: `Bearer ${localStorage.getItem("contactAppToken")}`,
          },
        },
      );

      Notify.success(data.message);
      localStorage.removeItem("contactAppToken");
      localStorage.removeItem("contactAppUserDetails");
      router.push("/");
    } catch (error: any) {
      Notify.failure(error.response.data.msg);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>
        {navItems.map(({ linkText, link, icon }) => (
          <ListItem
            sx={{
              display:
                localStorage.getItem("contactAppToken") !== null &&
                (linkText === "SIGN IN" || linkText === "SIGN UP")
                  ? "none"
                  : "flex",
            }}
            key={linkText}
            disablePadding
          >
            <ListItemButton
              onClick={() => {
                if (linkText === "LOGOUT") {
                  logout();
                } else {
                  router.push(link);
                }
              }}
            >
              <ListItemIcon
                sx={{
                  color: "white",
                }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }} primary={linkText} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        paddingBottom: { xs: "30px", md: "50px" },
      }}
    >
      <Box
        onClick={toggleDrawer}
        sx={{
          marginTop: "30px",
          height: "50px",
          width: "50px",
          border: "1px solid white",
          borderRadius: "50%",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <MenuIcon sx={{ color: "white", fontSize: "34px" }} />
      </Box>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "#49c5b6",
          },
        }}
        anchor="right"
        open={open}
        onClose={toggleDrawer}
      >
        {DrawerList}
      </Drawer>
    </Box>
  );
}
