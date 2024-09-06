import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <a href="/sign-in">Iniciar Sesion</a>
      <a href="/">Inicio</a>
      <a href="/contact">Contactanos</a>
      <a href="/about">Sobre Nosotros</a>
    </div>
  );
}
