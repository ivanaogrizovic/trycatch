import { FaReact, FaAngleRight, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import Card from "../card/card";
import "./cards-list.css";

export default function CardsList() {
  return (
    <div className="trycatch-cards-list">
      <Card>
        <div>
          <h2 className="trycatch-about-title">Tech Stack</h2>
          <ul>
            <li>
              <a
                href="https://react.dev/"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <FaReact /> React
              </a>
            </li>
            <li>
              <a
                href="https://docs.cohere.com/reference/about"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaAngleRight />
                Cohere API
              </a>
            </li>
            <li>
              <a href="" rel="noopener noreferrer" target="_blank">
                <IoLogoVercel /> Vercel
              </a>
            </li>
          </ul>
        </div>
      </Card>
      <Card>
        <div>
          <h2>About the Cohere API</h2>
          <p>
            The Cohere platform allows you to leverage the power of large
            language models (LLMs) with just a few lines of code and an API key.
          </p>
          <p>
            <strong>Please note</strong> that this app uses a free API, hence
            the request might be limited/timed depending on the amount of
            requests.
          </p>
        </div>
      </Card>
      <Card>
        <div>
          <h2>Get in touch</h2>
          <p>You can find me on:</p>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/ivana-ogrizovic/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ivanaogrizovic"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub /> GitHub
              </a>
            </li>
          </ul>
          <p>Feel free to give feedback and/or suggestions.</p>
        </div>
      </Card>
    </div>
  );
}
