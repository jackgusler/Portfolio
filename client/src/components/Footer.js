import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="footer" className="container pb-5">
      <p className={`pb-0 mb-0 ${theme}`}>
        Designed and developed by a passionate programmer, using{" "}
        <a
          className={theme}
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold" }}
        >
          VS Code
        </a>
        . Built with{" "}
        <a
          className={theme}
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold" }}
        >
          React.js
        </a>{" "}
        and{" "}
        <a
          className={theme}
          href="https://getbootstrap.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold" }}
        >
          Bootstrap CSS
        </a>
        , deployed with{" "}
        <a
          className={theme}
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold" }}
        >
          Vercel
        </a>
        . All text is set in the{" "}
        <a
          className={theme}
          href="https://rsms.me/inter/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold" }}
        >
          Inter
        </a>{" "}
        typeface. You can view my resume{" "}
        <a
          className={theme}
          href={process.env.PUBLIC_URL + "/Jack_Gusler_Resume.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold" }}
        >
          here
        </a>
        . Thank you for stopping by!
      </p>
    </div>
  );
};

export default Footer;
