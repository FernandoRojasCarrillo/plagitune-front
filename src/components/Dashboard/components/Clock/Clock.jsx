// src/components/Clock.jsx
import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";

const Clock = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // Cleanup to avoid memory leaks
    return () => clearInterval(timer);
  }, []);

  const formattedTime = dateTime.toLocaleTimeString(); // HH:MM:SS format
  const formattedDate = dateTime.toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }); // Día de la semana, día, mes, año

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        display: {
          xs: "none",
          md: "flex",
        },
      }}
    >
      <Typography variant="h5" color={"var(--text-color-secondary)"}>
        {formattedDate}
      </Typography>
      <Typography variant="h6" color={"var(--text-color-secondary)"}>
        {formattedTime}
      </Typography>
    </Box>
  );
};

export default Clock;
