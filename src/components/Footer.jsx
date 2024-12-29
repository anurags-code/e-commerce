import React from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.socialLinks}>
          <h3 style={styles.socialTitle}>Follow Us</h3>
          <div style={styles.icons}>
            <Link to="#" style={styles.iconLink}>
              <i className="fa fa-facebook" style={styles.icon}></i>
            </Link>
            <Link to="#" style={styles.iconLink}>
              <i className="fa fa-twitter" style={styles.icon}></i>
            </Link>
            <Link to="#" style={styles.iconLink}>
              <i className="fa fa-instagram" style={styles.icon}></i>
            </Link>
            <Link to="#" style={styles.iconLink}>
              <i className="fa fa-linkedin" style={styles.icon}></i>
            </Link>
          </div>
        </div>
        <div style={styles.contact}>
          <h3>Contact Us</h3>
          <p>support@example.com</p>
          <p>+123 456 7890</p>
        </div>
      </div>
      <div style={styles.bottom}>
        <p style={styles.copyRight}>
          &copy; {new Date().getFullYear()} Your Company Name. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#4b1b78",
    color: "white",
    padding: "30px 0",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  socialLinks: {
    textAlign: "center",
  },
  socialTitle: {
    marginBottom: "10px",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
  },
  iconLink: {
    margin: "0 10px",
    color: "white",
    fontSize: "1.8rem",
    textDecoration: "none",
  },
  icon: {
    transition: "color 0.3s ease",
  },
  contact: {
    textAlign: "center",
  },
  bottom: {
    backgroundColor: "#3b0a45",
    textAlign: "center",
    padding: "10px 0",
  },
  copyRight: {
    margin: 0,
  },
};

export default Footer;
