import { useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ViewDetailsModal = ({ slug }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 400,
    minWidth: 300,
    minHeight: 300,
    bgcolor: "var(--secondary-color)",
    border: "1px solid #8A2BE2",
    boxShadow: 24,
    borderRadius: "9px",
    p: 4,
  };

  return (
    <div>
      <Button
        variant="contained"
        sx={{
          color: "var(--text-color-primary)",
          backgroundColor: "var(--primary-color)",
          "&:hover": {
            backgroundColor: "var(--blue-violet-color)",
            color: "var(--text-color-primary)",
          },
        }}
        onClick={handleOpen}
      >
        Ver detalle
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-title"
            variant="h6"
            component="h2"
            color={"var(--text-color-secondary)"}
          >
            Resultado del análisis
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            repudiandae rerum, sapiente, omnis tempore perspiciatis dicta optio
            maiores debitis molestiae voluptatem quasi pariatur ex dolores earum
            asperiores voluptatum. Vero, totam? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Omnis ratione fugiat, ad ab dolorum
            iure architecto qui cumque neque sapiente ut vel, molestias aperiam
            non at rem, officiis quisquam sint! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quam et, officiis totam sint repellat
            tempore cum nostrum. Ullam non doloribus nisi neque nulla expedita
            itaque magni, doloremque distinctio, ex voluptatum.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 3,
            }}
          >
            <Button
              onClick={handleClose}
              variant="outlined"
              sx={{
                color: "var(--text-color-primary)",
                backgroundColor: "var(--primary-color)",
                "&:hover": {
                  backgroundColor: "var(--blue-violet-color)",
                  color: "var(--text-color-primary)",
                },
                position: "relative",
                margin: "0",
              }}
            >
              Cerrar
            </Button>
            <Link to={`/dashboard/historic-analysis/${slug}`}>Ver más...</Link>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ViewDetailsModal;
