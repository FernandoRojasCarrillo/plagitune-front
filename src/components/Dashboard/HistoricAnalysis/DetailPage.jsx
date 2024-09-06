import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Container,
  Divider,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";

function DetailPage() {
  const { slug } = useParams(); // Esto lo debemos cambiar al Id.
  const [historial, setHistorial] = useState(null);
  const [loading, setLoading] = useState(true);

  // Peticion al banckend, Toca esperar la ruta que nos den para hacer el get
  useEffect(() => {
    axios
      .get(`http://localhost:3001/historial/${slug}`)
      .then((response) => {
        setHistorial(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
        setLoading(false);
      });
  }, [slug]);

  //Este Loading sirve para que cuando el usuario quiera ver el detalle, entre en un proceso de carga y cuando este completado muestra la información

  if (loading) {
    return <LinearProgress color="primary" />;
  }

  // Esto es para decir que si no encuentra la información o si llega a salir un error en el proceso de la busqueda, muestra este mensaje.
  if (!historial) {
    return (
      <Typography variant="h6">
        No se encontraron detalles para este historial.
      </Typography>
    );
  }

  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Detección de Plagio Musical {slug}
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Canción Original:</Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Título:"
                  secondary={historial.songsOriginal.Título}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Artista/Banda:"
                  secondary={historial.songsOriginal.ArtistaBanda}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Fecha de Publicación:"
                  secondary={historial.songsOriginal.FechaDePublicación}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Canción Sospechosa:</Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Título:"
                  secondary={historial.songsSospechosa.Título}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Artista/Banda:"
                  secondary={historial.songsSospechosa.ArtistaBanda}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Fecha de Publicación:"
                  secondary={historial.songsSospechosa.FechaDePublicación}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Divider style={{ margin: "20px 0" }} />

        <Typography variant="h6" gutterBottom>
          Análisis de Similitudes
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Similitudes Melódicas:"
              secondary={historial.similitudes.Melodicas}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Similitudes en la Letra:"
              secondary={historial.similitudes.Letra}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Similitudes Rítmicas:"
              secondary={historial.similitudes.Ritmicas}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Similitudes Armónicas:"
              secondary={historial.similitudes.Armonicas}
            />
          </ListItem>
        </List>

        <Divider style={{ margin: "20px 0" }} />

        <Typography variant="h6" gutterBottom>
          Gráfico de Similitud
        </Typography>
        <Box style={{ margin: "20px 0" }}>
          <Typography variant="body1">Similitud General:</Typography>
          <LinearProgress
            variant="determinate"
            value={historial.similitudGeneral}
          />
        </Box>

        <Divider style={{ margin: "20px 0" }} />

        <Typography variant="h6" gutterBottom>
          Conclusión
        </Typography>
        <Typography variant="body1">{historial.conclusion}</Typography>
      </Paper>
    </Container>
  );
}

export default DetailPage;
