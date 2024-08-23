import React, { ReactNode } from "react";
import Button from "@mui/material/Button"; // Import Button instead of Box

interface ButtonProps {
  backgroundColor?: string;
  text: string | ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Type for onClick
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
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
