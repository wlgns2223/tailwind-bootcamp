import React from "react";
import styles from "./ResponsiveDemo.module.css";

export default function ResponsiveDemoModule() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Responsive Demo (CSS Module)</h2>

      {/* Responsive Grid */}
      <h3>Responsive Grid (1→2→3 columns)</h3>
      <div className={styles.responsiveGrid}>
        <div className={styles.gridItem}>Item 1</div>
        <div className={styles.gridItem}>Item 2</div>
        <div className={styles.gridItem}>Item 3</div>
        <div className={styles.gridItem}>Item 4</div>
        <div className={styles.gridItem}>Item 5</div>
        <div className={styles.gridItem}>Item 6</div>
      </div>

      {/* Responsive Text */}
      <h3>Responsive Text Size</h3>
      <div className={styles.responsiveText}>
        This text grows: 1rem → 1.25rem → 1.5rem
      </div>

      {/* Responsive Navigation */}
      <h3>Responsive Navigation</h3>
      <nav className={styles.nav}>
        <a href="#" className={styles.navItem}>
          Home
        </a>
        <a href="#" className={styles.navItem}>
          About
        </a>
        <a href="#" className={styles.navItem}>
          Services
        </a>
        <a href="#" className={styles.navItem}>
          Contact
        </a>
      </nav>

      {/* Conditional Display */}
      <h3>Conditional Display</h3>
      <div className={styles.mobileOnly}>📱 Mobile Only Content</div>
      <div className={styles.desktopOnly}>🖥️ Desktop Only Content</div>
    </section>
  );
}
