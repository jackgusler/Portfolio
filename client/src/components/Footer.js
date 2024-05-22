import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="container pb-5">
      <p className="pb-0 mb-0">
        Designed and developed by a passionate programmer, using{" "}
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold" }}
        >
          VS Code
        </a>
        . Built with{" "}
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold" }}
        >
          React.js
        </a>{" "}
        and{" "}
        <a
          href="https://getbootstrap.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold" }}
        >
          Bootstrap CSS
        </a>
        , deployed with{" "}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold" }}
        >
          Vercel
        </a>
        . All text is set in the{" "}
        <a
          href="https://rsms.me/inter/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold" }}
        >
          Inter
        </a>{" "}
        typeface. You can view my resume{" "}
        <a
          href={process.env.PUBLIC_URL + "/Jack_Gusler_Resume.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold" }}
        >
          here
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;
