import { Box,  Container, Divider, Grid, Typography } from "@mui/material";
import styles from "./Footer.module.css";


export const Footer = () => {

  const styledGrid = { display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }
  const styledTyp = { color: 'var(--text-color-primary)' }

  return (
    <Box
      sx={{
        bottom: 0,
        width: "100%",
        height: "auto",
        backgroundColor: 'var(--primary-color)',
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="row" alignItems="center" justifyContent="space-between">
          <Grid item sx={styledGrid} direction="row">
            <Typography style={styledTyp}  variant="h6">
              PlagiTune
            </Typography>
            <Typography style={styledTyp}  variant="subtitle1">
               &copy; 2024. All Rights Reserved
            </Typography>
          </Grid>
          <Grid item sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }} direction="row">
            <Typography style={styledTyp}  variant="subtitle1">
                Privacidad
            </Typography>
            <Typography style={styledTyp}  variant="subtitle1">
                Terminos y Condiciones
            </Typography>
            <Divider orientation="vertical" color="#C0C0C0" sx={{ height: "1.5rem", mx: "4px" }}></Divider>
            <button onClick={() => window.open("https://www.facebook.com/profile.php?id=61565216132909")}
              className={styles.buttonFacebook}
            >
              <i className="fa-brands fa-square-facebook"></i>
            </button>
            <button 
              className={styles.buttonInstagram} 
              onClick={() => window.open("https://www.instagram.com/plagitune/")}
              >
              <i className="fa-brands fa-instagram"></i>
            </button>
            <button 
              className={styles.buttonX} 
              onClick={() => window.open("https://www.linkedin.com/in/p%C3%ADa-fernandez-szkutnik/")}
              >
              <i className="fa-brands fa-x-twitter"></i>
            </button>
            <button 
              className={styles.buttonLinkedin} 
              onClick={() => window.open("https://www.linkedin.com/company/fszk-music/posts/?feedView=all")}
              >
              <i className="fa-brands fa-linkedin"></i>
            </button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
