import { useState } from "react";
import FileViewer from "../../components/FileViewer/FileViewer";
import StartAnalysis from "../../components/Dashboard/StartAnalysis/StartAnalysis";

function StartAnalysisPage() {
  const [fileUrl, setFileUrl] = useState("");
  return (
    <>
      <StartAnalysis onFileUpload={setFileUrl} />
      {fileUrl && <FileViewer fileUrl={fileUrl} />}
    </>
  );
}

export default StartAnalysisPage;
