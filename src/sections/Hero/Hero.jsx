import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Untitled_design__1_-removebg-preview (2).png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/passakornResume.pdf";
import { useTheme } from "../../common/ThemeContest";

export default function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of passakorn"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Passakonr
          <br />
          Chantarapakorn
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://x.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>

          <a
            href="https://github.com/PassakornChamp?tab=repositories"
            target="_blank"
          >
            <img src={githubIcon} alt="github icon" />
          </a>

          <a href="https://th.linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}
