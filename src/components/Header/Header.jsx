import styles from "./Header.module.css";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { useEffect, useState } from "react";

function Header({ menuOpen, setMenuOpen, scrollToSection }) {
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition((prevPosition) => {
      console.log("PrevPosition:", prevPosition);
      console.log("New Position:", position);
      return position;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={scrollPosition > 700 ? styles.afterHeader :  styles.header}>
      <div className={styles.logo}>
        <button className={styles.logoButton} onClick={() => navigate("/home")}>
          <h1>PlagiTune</h1>
        </button>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <button
              className={`${styles.navButtons} ${
                scrollPosition >= 800 && scrollPosition < 1200 ? styles.active : ""
              }`}
              onClick={() => scrollToSection("file-section")}
            >
              Inicio
            </button>
          </li>
          <li>
            <button
              className={`${styles.navButtons} ${
                1900 <= scrollPosition && scrollPosition < 2600
                  ? styles.active
                  : ""
              }`}
              onClick={() => scrollToSection("about-section")}
            >
              Sobre Nosotros
            </button>
          </li>
          <li>
            <button
              className={`${styles.navButtons} ${
                scrollPosition >= 2600 ? styles.active : ""
              }`}
              onClick={() => scrollToSection("contact-section")}
            >
              Contactanos
            </button>
          </li>
        </ul>
        <div className={styles.authButtons}>
          <button onClick={() => navigate("/sign-in")} className={styles.login}>
            Iniciar sesión <LoginIcon />
          </button>
        </div>
      </nav>
      <IoMenu className={styles.menuIcon} onClick={toggleMenu} />
    </header>
  );
}

export default Header;
