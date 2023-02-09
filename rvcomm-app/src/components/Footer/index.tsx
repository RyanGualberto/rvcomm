import "./index.scss";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="content">
        <Link to="/app/home" className="logo">
          RVCOMM
        </Link>
        <div className="social-media">
          <a
            className="social-media-link"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub size={30} />
            GitHub
          </a>
        </div>
      </section>
      <section className="copyright">
        <p>
          © 2023 RVCOMM. Todos os direitos reservados a Ryan Gualberto,
          Desenvolvedor e proprietário do Site.
        </p>
      </section>
    </div>
  );
};

export { Footer };
