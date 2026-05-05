import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router";
import "./footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="trycatch-footer">
      <h2>Try_Catch</h2>
      <p>AI-powered code review tool for developers</p>

      <div className="trycatch-footer-content">
        <div className="trycatch-footer-section">
          <h3>Navigation</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        <div className="trycatch-footer-section">
          <h3>Resources</h3>
          <ul>
            <li>
              <a
                href="https://github.com/ivanaogrizovic/trycatch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub /> GitHub
              </a>
            </li>
          </ul>
        </div>

        <div className="trycatch-footer-section">
          <h3>Contact</h3>
          <a
            href="https://www.linkedin.com/in/ivana-ogrizovic/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-email"
          >
            <FiLinkedin />
            Get in Touch
          </a>
        </div>
      </div>
      <div className="trycatch-footer-bottom">
        <p>&copy; {currentYear} Try_Catch. All rights reserved.</p>
        <p>Built with React & Cohere AI</p>
      </div>
    </footer>
  );
}
