import { Box, Typography } from "@mui/material";

function CompareSongs() {
  return (
    <Box>
      <Typography variant="h3" sx={{ padding: 2 }}>
        Aqui haremos que se puedan comparar dos archivos de audio y mostrar el
        resultado. Tambien esto se guardara en el historico, pero con una
        anotación que diga (CompareSongs)
      </Typography>
    </Box>
  );
}

export default CompareSongs;
