import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface InputFieldProps {
  name: string;
  error?: string;
  onBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  label: string;
  type?: string;
  value?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  error,
  onBlur,
  onChange,
  label,
  value,
  ...props
}) => {
  return (
    <Box>
      <TextField
        value={value}
        autoComplete="new-password"
        name={name}
        error={Boolean(error)}
        fullWidth
        onBlur={onBlur}
        onChange={onChange}
        label={label}
        variant="outlined"
        {...props}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
          "& .MuiInputBase-input": {
            color: "white",
          },
        }}
      />
      {error && (
        <Box
          sx={{
            color: "red",
            paddingTop: "6px",
            fontSize: "11px",
          }}
        >
          {error}
        </Box>
      )}
    </Box>
  );
};

export default InputField;
