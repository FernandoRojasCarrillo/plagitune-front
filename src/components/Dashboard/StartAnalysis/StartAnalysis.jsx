import { useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  Box,
  Button,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

function StartAnalysis({ onFileUpload }) {
  const [fileName, setFileName] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [fileUploaded, setFileUploaded] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [progress, setProgress] = useState(0);

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
    setAnalysisResult(null);
    setProgress(0);
  };

  const handleStartAnalysis = async () => {
    setAnalyzing(true);
    setProgress(5);

    try {
      //Aqui ira la peticion al back
      const response = await axios.post("http://localhost:3001/analyze", {
        fileUrl: fileUrl, //Aqui ira el archivo real
      });

      setProgress(100); //Cuando el analisis este al 100%
      setAnalysisResult(response.data); // Se mostrara el resultado del análisis
    } catch (error) {
      console.error("Error durante el análisis", error);
    } finally {
      setAnalyzing(false); // Terminamos el análisis
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      margin="0px"
      padding="0px"
      with="100%"
      boxSizing="border-box"
    >
      <Typography variant="h4" sx={{ padding: 2, display: "flex" }}>
        Análisis de archivos.
      </Typography>

      {!fileUploaded ? (
        <Paper
          {...getRootProps()}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            border: "2px dashed #ccc",
            cursor: "pointer",
            width: "100%",
            height: "200px",
            maxWidth: "750px",
            backgroundColor: isDragActive ? "#e3f2fd" : "#f5f5f5",
            boxSizing: "border-box",
          }}
        >
          <input {...getInputProps()} />
          <Typography variant="body3" sx={{ textAlign: "center" }}>
            {isDragActive
              ? "Suelta el archivo aquí ..."
              : "Arrastra y suelta un archivo aquí, o haz clic para seleccionar un archivo"}
          </Typography>
        </Paper>
      ) : (
        <>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontSize: "14px",
              marginTop: "10px",
              padding: "10px",
            }}
          >
            Archivo cargado: {fileName}
          </Typography>

          {/* Botón de iniciar análisis */}
          {!analyzing && !analysisResult && (
            <Button
              variant="contained"
              onClick={handleStartAnalysis}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "10px",
                maxWidth: "250px",
              }}
            >
              Iniciar Análisis
            </Button>
          )}

          {/* Progreso del análisis */}
          {analyzing && (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt={2}
            >
              <CircularProgress variant="determinate" value={progress} />
              <Typography variant="body2" sx={{ marginTop: 2 }}>
                Procesando análisis...
              </Typography>
            </Box>
          )}

          {/* Resultado del análisis cuando termine el proceso */}
          {analysisResult && (
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                fontSize: "14px",
                marginTop: "10px",
                padding: "10px",
              }}
            >
              Resultado del análisis: {JSON.stringify(analysisResult)}
            </Typography>
          )}

          {/* Botón para empezar un nuevo análisis, esto aparecera una vez se termine el proceso del analisis y muestre la respuesta */}
          {analysisResult && !analyzing && (
            <Button
              variant="contained"
              onClick={handleNewUpload}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "10px",
                maxWidth: "250px",
              }}
            >
              Empezar un nuevo análisis
            </Button>
          )}
        </>
      )}
    </Box>
  );
}

export default StartAnalysis;
