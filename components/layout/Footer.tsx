import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>
          © {currentYear} <strong>Respion</strong>. All rights reserved.
        </p>

        <div style={styles.links}>
          <a href="/privacy" style={styles.link}>Privacy Policy</a>
          <span style={styles.separator}>|</span>
          <a href="/terms" style={styles.link}>Terms & Conditions</a>
          <span style={styles.separator}>|</span>
          <a href="/contact" style={styles.link}>Contact</a>
        </div>
      </div>
    </footer>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    backgroundColor: "#111",
    color: "#fff",
    padding: "16px 0",
    marginTop: "auto",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  text: {
    margin: 0,
    fontSize: "14px",
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  link: {
    color: "#aaa",
    textDecoration: "none",
    fontSize: "14px",
  },
  separator: {
    color: "#555",
  },
};

export default Footer;
