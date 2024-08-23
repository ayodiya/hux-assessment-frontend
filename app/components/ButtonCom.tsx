import React from "react";
import Button from "@mui/material/Button"; // Import Button instead of Box

interface ButtonProps {
  backgroundColor?: string;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Type for onClick
  type?: "button" | "reset" | "submit";
}

const ButtonCom: React.FC<ButtonProps> = ({
  backgroundColor,
  text,
  onClick,
  type,
}) => {
  return (
    <Button
      type={type}
      sx={{
        backgroundColor: backgroundColor,
        color: "white",
      }}
      disableElevation
      variant="contained"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ButtonCom;
