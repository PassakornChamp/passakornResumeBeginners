import React from "react";
import styles from "./FooterStyles.module.css";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <div className={styles.content}>
        <p>
          © {new Date().getFullYear()} Passakorn Chantarapakorn All rights
          reserved.
        </p>
        <div className={styles.socialMediaContainer}>
          {/* <nav className={styles.nav}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav> */}
          <div className={styles.socialMedia}>
            <a
              href="https://github.com/PassakornChamp?tab=overview&from=2024-08-01&to=2024-08-31"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://th.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
