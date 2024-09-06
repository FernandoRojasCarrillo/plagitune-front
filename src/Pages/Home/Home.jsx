import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import FileViewer from "../../components/FileViewer/FileViewer";
import InfoSection from "../../components/InfoSection/InfoSection";
import About from "../../components/About/About";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Contact from "../../components/Contact/Contact";
import { Divider } from "@mui/material";
import ImageSection from "../../components/ImageSection/ImageSection";
import UploadFile from "../../components/UploadFile/UploadFile";

function Home() {
  const [fileUrl, setFileUrl] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ block: "start", behavior: "smooth" });
    } else {
      console.log("No se encontró la sección");
    }
  };

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <Header
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen}
        scrollToSection={scrollToSection}
      />
      {menuOpen && <Menu />}

      <div id="image-section" style={{ paddingTop: "92px" }}>
        <ImageSection scrollToSection={scrollToSection}></ImageSection>
      </div>
      <div id="file-section" style={{ paddingTop: "92px" }}>
        <UploadFile onFileUpload={setFileUrl} />
        {fileUrl && <FileViewer fileUrl={fileUrl} />}
      </div>
      <Divider></Divider>
      <div
        id="info-section"
        style={{ width: "100%", backgroundColor: "#601E90" }}
      >
        <InfoSection></InfoSection>
      </div>
      <div id="about-section" style={{}}>
        <About></About>
      </div>
      <div
        id="contact-section"
        style={{ width: "100%", backgroundColor: "#601E90" }}
      >
        <Contact></Contact>
      </div>
      <Divider
        orientation="horizontal"
        variant="middle"
        sx={{ color: "#1f1e1e" }}
      />
      <Footer />
    </div>
  );
}

export default Home;
