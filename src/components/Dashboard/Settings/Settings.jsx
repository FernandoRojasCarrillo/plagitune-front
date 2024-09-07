import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Avatar,
  Alert,
  Divider,
} from "@mui/material";
import LabelIcon from "@mui/icons-material/Label";

function Settings() {
  const [profilePic, setProfilePic] = useState("");
  const [name, setName] = useState("");
  const [preview, setPreview] = useState("");
  const [imageChanged, setImageChanged] = useState(false); // Estado para saber si se cargó una nueva imagen
  const [nameChanged, setNameChanged] = useState(false); // Estado para saber si se cambió el nombre

  // Manejo para la imagen de perfil del usuario
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(file);
        setPreview(reader.result);
        setImageChanged(true); // Esto marca que se ha cambiado la imagen
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageCancel = () => {
    setProfilePic("");
    setPreview("");
    setImageChanged(false); // Esto reinicia el estado de la imagen
  };

  const handleImageUpdate = async () => {
    const confirm = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Deseas actualizar tu imagen de perfil?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, actualizar",
      cancelButtonText: "Cancelar",
    });

    if (confirm.isConfirmed) {
      try {
        const formData = new FormData();
        formData.append("profilePic", profilePic);

        // const response = await axios.put(
        //   "http://localhost:3001/user/update-image",
        //   formData
        // );
        Swal.fire(
          "¡Éxito!",
          "Tu imagen de perfil ha sido actualizada.",
          "success"
        );
        handleImageCancel(); // Reiniciar el estado después de la actualización
      } catch (error) {
        console.error("Error actualizando la imagen de perfil:", error);
        Swal.fire(
          "Error",
          "No se pudo actualizar la imagen de perfil.",
          "error"
        );
      }
    }
  };

  // Manejo del nombre
  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameChanged(true); // Marcar que se ha cambiado el nombre
  };

  const handleNameCancel = () => {
    setName("");
    setNameChanged(false); // Reiniciar estado del nombre
  };

  const handleNameUpdate = async () => {
    const confirm = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Deseas actualizar tu nombre?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, actualizar",
      cancelButtonText: "Cancelar",
    });

    if (confirm.isConfirmed) {
      try {
        // const response = await axios.put(
        //   "http://localhost:3001/user/update-name",
        //   { name }
        // );
        Swal.fire("¡Éxito!", "Tu nombre ha sido actualizado.", "success");
        handleNameCancel(); // Reiniciar el estado después de la actualización
      } catch (error) {
        console.error("Error actualizando el nombre:", error);
        Swal.fire("Error", "No se pudo actualizar el nombre.", "error");
      }
    }
  };

  const handleDeleteAccount = async () => {
    const confirm = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar cuenta",
      cancelButtonText: "Cancelar",
    });

    if (confirm.isConfirmed) {
      try {
        await axios.delete("http://localhost:3001/user/delete");
        Swal.fire("Eliminado", "Tu cuenta ha sido eliminada.", "success");
        // Redireccionar o realizar otras acciones post eliminación
      } catch (error) {
        console.error("Error eliminando la cuenta:", error);
        Swal.fire("Error", "No se pudo eliminar la cuenta.", "error");
      }
    }
  };

  return (
    <Box
      sx={{
        p: { xs: 1, sm: 3 },
        paddingBottom: {
          xs: 6,
          sm: 3,
        },
        bgcolor: { sm: "grey.100" },
        borderRadius: 2,
      }}
    >
      <Typography variant="h3" sx={{ padding: 2 }}>
        Configuración de la Cuenta
      </Typography>

      <Divider variant="middle" />

      {/* Campo para subir imagen de perfil */}

      <Typography
        variant="h6"
        color="var(--text-color-secondary)"
        display={"flex"}
        alignItems={"center"}
        sx={{ pt: 2, pb: 1 }}
      >
        <LabelIcon color="secondary" sx={{ mr: 1 }} />
        Cambiar Imagen de Perfil
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          src={preview}
          alt="Imagen de perfil"
          sx={{
            width: "120px",
            height: "120px",
            marginBottom: "20px",
          }}
        />
        {!imageChanged ? (
          <Button
            variant="contained"
            component="label"
            sx={{
              ml: 2,
              height: "40px",
            }}
          >
            Subir Imagen
            <input
              type="file"
              hidden
              accept="image/png, image/jpeg"
              onChange={handleImageUpload}
            />
          </Button>
        ) : (
          <Box
            display="flex"
            gap="10px"
            marginTop="10px"
            sx={{
              display: {
                xs: "flex",
                sm: "none",
              },
              flexDirection: {
                xs: "column",
                sm: "none",
              },
            }}
          >
            <Button
              variant="contained"
              color="error"
              onClick={handleImageCancel}
              sx={{
                ml: {
                  xs: 2,
                  sm: 4,
                },
              }}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleImageUpdate}
              sx={{
                ml: {
                  xs: 2,
                  sm: 4,
                },
              }}
            >
              Actualizar Imagen
            </Button>
          </Box>
        )}
      </Box>

      {/* Campo para cambiar nombre */}
      <Typography
        variant="h6"
        color="var(--text-color-secondary)"
        display={"flex"}
        alignItems={"center"}
        sx={{ pt: 5, pb: 1 }}
      >
        <LabelIcon color="secondary" sx={{ mr: 1 }} />
        Cambiar Nombre
      </Typography>
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        color="secondary"
        sx={{
          marginTop: 1,
          width: {
            xs: "100%",
            sm: "50%",
          },
        }}
        value={name}
        onChange={handleNameChange}
      />
      {nameChanged && (
        <Box display="flex" gap="10px" marginTop="10px">
          <Button variant="contained" color="error" onClick={handleNameCancel}>
            Cancelar
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNameUpdate}
          >
            Actualizar Nombre
          </Button>
        </Box>
      )}

      {/* Botón para eliminar cuenta */}

      <Divider variant="middle" sx={{ mt: 2 }} />

      <Typography
        variant="h6"
        color="var(--text-color-secondary)"
        display={"flex"}
        alignItems={"center"}
        sx={{ pt: 2, pb: 1 }}
      >
        <LabelIcon color="secondary" sx={{ mr: 1 }} />
        Eliminar Cuenta
      </Typography>
      <Alert severity="warning" sx={{ mt: 2 }}>
        Proceda con precaución. Asegúrese de haber realizado una copia de la
        información de sus análisis realizados en su cuenta en caso de que
        necesite acceder a sus datos más adelante. Borraremos por completo sus
        datos.
      </Alert>

      <Button
        variant="contained"
        color="error"
        sx={{ marginTop: 3 }}
        onClick={handleDeleteAccount}
      >
        Eliminar Cuenta
      </Button>
    </Box>
  );
}

export default Settings;
