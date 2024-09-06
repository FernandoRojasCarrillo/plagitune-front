import { useState } from "react";
import { Button, Paper } from "@mui/material";
import { useDropzone } from "react-dropzone";
import styles from "./UploadFile.module.css";

function UploadFile({ onFileUpload }) {
  const [fileName, setFileName] = useState("");
  const [, setFileUrl] = useState("");
  const [fileUploaded, setFileUploaded] = useState(false);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setFileName(file.name);
      const url = URL.createObjectURL(file);
      setFileUrl(url);
      onFileUpload(url);
      setFileUploaded(true);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "audio/mpeg, audio/wav, audio/ogg",
  });

  const handleNewUpload = () => {
    setFileUploaded(false);
    setFileName("");
    setFileUrl("");
  };

  return (
    <div className={styles.containerUploadFile}>
      <h3 className={styles.title}>Detección Avanzada de Plagio Musical</h3>
      <p className={styles.paragraph}>
      PlagiTune es una innovadora solución tecnológica diseñada para
        revolucionar la industria musical mediante la detección precisa de
        plagio. Nuestro sistema utiliza algoritmos avanzados de procesamiento de
        audio, análisis de señales y aprendizaje automático para identificar
        similitudes significativas entre obras musicales, ofreciendo una
        herramienta robusta para proteger los derechos de autor y fomentar la
        originalidad en la música.
      </p>
      {!fileUploaded ? (
        <Paper
          {...getRootProps()}
          className={styles.inputUploadFile}
          sx={{
            backgroundColor: isDragActive ? "#e3f2fd" : "#f5f5f5",
          }}
        >
          <input {...getInputProps()} />
          <p>
            {isDragActive
              ? "Suelta el archivo aquí ..."
              : "Arrastra y suelta un archivo aquí, o haz clic para seleccionar un archivo"}
          </p>
        </Paper>
      ) : (
        <>
          <p className={styles.viewUploadFile}>Archivo cargado: {fileName}</p>
          <Button
            variant="contained"
            onClick={handleNewUpload}
            className={styles.buttonNewUpload}
          >
            Cargar nuevo archivo
          </Button>
        </>
      )}
    </div>
  );
}

export default UploadFile;

