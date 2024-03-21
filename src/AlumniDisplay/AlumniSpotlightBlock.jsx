import { Box, Button, Modal, Typography } from "@mui/material";
import text from "./longtext";

import React from "react"; 
const style = {
  position: 'absolute' , 
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  height: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: "auto", // Enable vertical scrolling

};

export default function AlumniSpotlightBlock() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          ALUMNI SPOTLIGHT: FROM WARSAW TO NEW YORK, AVA PACCHIANA ’18 HOLDS COMMUNITIES TOGETHER
          </Typography>
          <Typography>
            
            {text}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}