import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Data from "./Data";

const UserDataCard = ({ username, email, age, ondelete, _id }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="col-md-4 mb-4"> {/* Adjust column width for three cards in a row */}
      <div className="card shadow-sm h-100"> {/* Ensures uniform height for cards */}
        <div className="card-body">
          <h5 className="card-title mb-3">{username}</h5> {/* Add margin-bottom */}
          <p className="mb-2">
            <strong>Email:</strong> {email}
          </p>
          <p className="mb-3">
            <strong>Age:</strong> {age}
          </p>
          <div className="d-flex justify-content-between"> {/* Space between buttons */}
            <button
              className="btn btn-danger btn-sm me-2" // Add right margin to separate buttons
              onClick={() => ondelete(_id)}
            >
              Delete
            </button>
            <button
              className="btn btn-success btn-sm"
              onClick={handleOpen}
            >
              Update
            </button>
          </div>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="dialog-title">
          Update User
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent
          dividers
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Data InitialData={{ username, email, age, _id }} onclose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserDataCard;
