import styles from "Navbar.module.css";

export function Navbar() {
  return (
    <div className={styles.main}>
      <div className={styles.navigation}></div>
      <div className={styles.navActions}></div>
    </div>
  );
}
