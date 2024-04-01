import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "4px double #000",
  boxShadow: 40,
  p: 4,
  fontWeight: "bolder"
};

export default function ImgModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        id="modal-btn"
        onClick={handleOpen}
        sx={{
          "&:hover": {
            boxShadow: "none",
            background: "#7149C6"
          },

          color: "yellow",
          fontWeight: "bolder",
          letterSpacing: "4px",
          fontSize: "1.5rem",
          fontFamily: "Quantico",
          width: "100%",
          height: "3rem",
          textTransform: "none",
          boxShadow: "0 0 30px 2px cyan"
        }}
      >
        <motion.p
          whileInView={{
            x: [-80, 80],
            transition: {
              duration: 100,
              type: "spring",
              damping: 10,
              repeat: Infinity,
              repeatDelay: 0.8,
              repeatType: "mirror",
              ease: "linear"
            }
          }}
        >
          Click me first!
        </motion.p>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="modal-box">
          <Typography id="modal-modal-title" variant="h6" component="h6">
            <b>Attention!</b>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <b>
              click each image to start big picture mode, and then click once
              again to exit.
            </b>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
