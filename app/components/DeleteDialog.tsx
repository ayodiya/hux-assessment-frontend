import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Fragment } from "react";

import ButtonCom from "./ButtonCom";

interface DeleteDialogProps {
  openDeleteDialog: boolean;
  handleDeleteDialog?: React.MouseEventHandler<HTMLButtonElement>; // Type for onClick
}

export default function DeleteDialog({
  handleDeleteDialog,
  openDeleteDialog,
}: DeleteDialogProps) {
  return (
    <Fragment>
      <Dialog
        open={openDeleteDialog}
        onClose={handleDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete Ayodeji Oludiya?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonCom
            onChange={handleDeleteDialog}
            backgroundColor="#ffb400"
            text="Cancel"
          />
          <ButtonCom
            backgroundColor="#e74c3c"
            onChange={handleDeleteDialog}
            text="Delete"
          />
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
