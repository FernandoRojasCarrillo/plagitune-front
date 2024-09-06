import { Link } from "react-router-dom";
import { Avatar, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  const [userData, setUserData] = useState({
    name: "",
    company: "",
    profilePic: "",
    registeredWithGoogle: false,
  });

  // Logica para hacer la petición al DB del back y pedir la información del usuario
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/user");
        const { name, company, profilePic, registeredWithGoogle } =
          response.data;

        setUserData({
          name,
          company,
          profilePic: registeredWithGoogle ? profilePic : "",
          registeredWithGoogle,
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // Esto sirve para que cuando se cargue el usuario, sino tiene foto de google, colocara las iniciales de los nombres o el nombre.
  const generateInitials = (name) => {
    if (!name) return "";
    const nameParts = name.split(" ");
    return nameParts.length > 1
      ? nameParts[0][0] + nameParts[1][0]
      : nameParts[0][0];
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="250px"
        sx={{
          borderRadius: "8px",
          padding: 2,
          boxShadow: "0 7px 20px 0 rgba(0, 0, 0, 0.35)",
          width: {
            xs: "100%",
            sm: "450px",
          },
          maxWidth: "450px",
        }}
      >
        <Avatar
          src={userData.profilePic || ""}
          alt="photoProfile"
          sx={{
            width: "112px",
            height: "112px",
            marginTop: "20px",
            backgroundColor: "#1b263B",
          }}
        >
          {!userData.profilePic && generateInitials(userData.name)}
        </Avatar>
        <Link to="/dashboard/settings" style={{ textDecoration: "none" }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="10px"
            paddingTop="20px"
          >
            <Typography
              variant="h4"
              fontWeight="medium"
              style={{ color: "var(--text-color-secondary)" }}
            >
              {userData.name || "John Doe"}
            </Typography>
            <Typography
              variant="h6"
              fontWeight="light"
              style={{ color: "var(--text-color-secondary)" }}
            >
              {userData.company || "Name Company"}
            </Typography>
          </Box>
        </Link>
      </Box>
    </>
  );
}

export default Profile;
