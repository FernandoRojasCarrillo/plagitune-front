import { useRef } from 'react';
import emailjs from 'emailjs-com';
import styles from './Contact.module.css';
import { Stack, Box, Typography, TextField, Button } from '@mui/material';
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();

  const styledTextField = {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#601E90', // Color del borde por defecto
      },
      '&:hover fieldset': {
        borderColor: '#4B0082', // Color del borde al pasar el mouse
      },
      '&.Mui-focused fieldset': {
        borderColor: '#4B0082', // Color del borde al estar enfocado (cuando se toca)
      },
    },
    '& .MuiInputLabel-root': {
      color: '#601E90', // Color del label por defecto
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#4B0082', // Color del label cuando está enfocado
    },
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_mludtok', 'template_l8qfqph', form.current, 'yQNMeO1gaR9hfetMf')
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("✔️ Mensaje Enviado", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          })
          // You might want to show a success message to the user here
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("❌ Error al enviar el mensaje", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          // You might want to show an error message to the user here
        },
      );
  };

  return (
    <Box  className={styles.container}>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={10}
        alignItems="center"
        justifyContent="center"
      >

        <Box className={styles.formContainer}>
          <Typography variant="h4" component="h3" gutterBottom 
          sx={{
             textAlign: 'center',
             marginBottom: '20px',
             fontWeight:900
              }}>
            Contáctanos
          </Typography>
          <Typography variant="h7" component="h3" gutterBottom
           sx={{
             textAlign: 'center',
             marginBottom: '20px',
             fontWeight: 400
              }}>
            Nos encantaría saber su opinion. Complete este formulario y nos comunicaremos con usted lo antes posible.
          </Typography>
          <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <Box sx={{  flex: 1, padding: ' 10px'}} >
            <TextField
              fullWidth
              label="Nombre"
              name="user_name"
              variant="outlined"
              margin="normal"
              required
              sx={styledTextField}
            />
            <TextField
              fullWidth
              label="Email"
              name="user_email"
              type="email"
              variant="outlined"
              margin="normal"
              required
              sx={styledTextField}
            />
            <TextField
              fullWidth
              label="Título"
              name="title"
              variant="outlined"
              margin="normal"
              required
              sx={styledTextField}
            />
            </Box>
            <Box className={styles.rightTextField}>
            <TextField
              fullWidth
              label="Mensaje"
              name="message"
              multiline
              rows={8}
              variant="outlined"
              margin="normal"
              required
              sx={styledTextField}
            />
            </Box >
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{
                backgroundColor: '#601E90', 
                color: 'white', 
                padding: '12px 24px', 
                fontSize: '18px', 
                borderRadius: '8px', 
                '&:hover': {
                  backgroundColor: '#9E78B9', 
                },
                '&:disabled': {
                  backgroundColor: '#B0B0B0', 
                  color: '#FFFFFF', 
                },
              }}
            >
              Enviar
            </Button>
          </form>
        </Box>
      </Stack>
      <ToastContainer/>
    </Box>
  );
}