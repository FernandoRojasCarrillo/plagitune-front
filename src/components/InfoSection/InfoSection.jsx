import { Box } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import styles from "./InfoSection.module.css";
import DevicesIcon from '@mui/icons-material/Devices';
import QuickreplyIcon from '@mui/icons-material/Quickreply';


export default function InfoSection() {

    return (
        <Box className={styles.box}>
            <div className={styles.mission}>
                <div >
                    <h2>Detección precisa, Resultados rápidos,</h2>
                    <h2> Fácil de usar</h2>
                </div>
                <p className={styles.description}>El problema del plagio musical es una preocupación creciente en la
                    industria debido a la digitalización y fácil acceso a la música. PlagiTune aborda esta necesidad
                    crítica al proporcionar una herramienta precisa para identificar y prevenir el plagio.
                 
                </p>
            </div>
            <div className={styles.cards} >
                <div className={styles.container} >
                    <VerifiedIcon className={styles.icon} sx={{fontSize: '4em'}}	/>
                    <div className={styles.paragraph} >
                        <p className={styles.title} > Detecta el plagio musical </p>
                        <p className={styles.content} >Dirigido a artistas, compositores, discográficas,
                        productores,  entre otros interesados en proteger la originalidad y autenticidad de las obras musicales.</p>
                    </div>
                </div>
                <div className={styles.container}  >
                    <QuickreplyIcon className={styles.icon} sx={{fontSize: '4em'}}/>
                    <div className={styles.paragraph} >
                        <p className={styles.title} >Rapido y facil</p>
                        <p className={styles.content} >Simplemente suelte sus archivos en la página, apriete el boton de subir  
                        y espere a que se complete el proceso. 
                        Nuestro objetivo es analizar la pista en menos de entre 1 y 2 minutos.</p>
                    </div>
                </div>
                <div className={styles.container}  >
                    <DevicesIcon className={styles.icon} sx={{fontSize: '4em'}}/>
                    <div className={styles.paragraph} >
                        <p className={styles.title} >Soporta todos los dispositivos</p>
                        <p className={styles.content} >PlagiTune opera en el navegador y funciona con todas las plataformas. 
                            No necesita descargar ni instalar ningún software.</p>
                    </div>
                </div>
            </div>
        </Box>
    )
}