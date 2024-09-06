import { useRef } from "react";
import styles from "./FileViewer.module.css";

const FileViewer = ({ fileUrl }) => {
  const audioRef = useRef(null);

  return (
    <div className={styles.viewFile}>
      <h2>Reproductor de Audio:</h2>
      <audio ref={audioRef} src={fileUrl} controls />
    </div>
  );
};

export default FileViewer;
