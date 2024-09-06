import { Box, Typography } from "@mui/material";
import styles from "./ImageSection.module.css";
import { FaArrowRight } from "react-icons/fa";

export default function ImageSection({scrollToSection}) {

    const image = '/homeImage.jpg';

    return (
        <Box  className={styles.container}>
            <Box sx={{ width: '70%', paddingLeft: '70px' }}>
                <Typography variant="p" className={styles.title} >
                    Detecta plagios en música al instante y con precisión.
                </Typography>
                <Typography variant="p" className={styles.content} >
                    PlagiTune te permite detectar plagios en música al instante, 
                    brindando análisis detallados y comentarios precisos para perfeccionar tus composiciones.
                </Typography>
                <button className={styles.button} onClick={() => scrollToSection("file-section")} >
                    Comenzar <FaArrowRight />
                </button>
            </Box>
            <Box sx={{ 
                display: 'flex',
                justifyContent: 'center',
                width: '100%' }}
                className={styles.imageContainer}
                >
                <img
                    className={styles.image}
                    src={image}
                    alt="image"
                />
            </Box>
        </Box>
    );
}