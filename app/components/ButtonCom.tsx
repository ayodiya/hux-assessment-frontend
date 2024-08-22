import React from "react";
import Button from "@mui/material/Button"; // Import Button instead of Box

interface ButtonProps {
  backgroundColor: string;
  text: string;
  onChange?: React.MouseEventHandler<HTMLButtonElement>; // Type for onClick
}

const ButtonCom: React.FC<ButtonProps> = ({
  backgroundColor,
  text,
  onChange,
}) => {
  return (
    <Button
      sx={{
        backgroundColor: backgroundColor,
        color: "white",
      }}
      disableElevation
      variant="contained"
      onClick={onChange}
    >
      {text}
    </Button>
  );
};

export default ButtonCom;
