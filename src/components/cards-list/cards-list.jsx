import { FaReact, FaAngleRight } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { IoLogoVercel } from "react-icons/io5";
import { SiRedis } from "react-icons/si";
import GlareHover from "../glare-hover/GlareHover";
import "./cards-list.css";

export default function CardsList() {
  return (
    <div className="trycatch-cards-list">
      <GlareHover
        glareColor="#ffffff43"
        glareOpacity={0.3}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={1400}
        playOnce={false}
      >
        <div>
          <h2 className="trycatch-about-title">Tech Stack</h2>
          <ul>
            <li>
              <a
                href="https://react.dev/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaReact aria-hidden="true" /> React
              </a>
            </li>
            <li>
              <a
                href="https://docs.cohere.com/reference/about"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaAngleRight aria-hidden="true" />
                Cohere API
              </a>
            </li>
            <li>
              <a
                href="https://vercel.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <IoLogoVercel aria-hidden="true" /> Vercel
              </a>
            </li>
            <li>
              <a
                href="https://upstash.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <SiRedis aria-hidden="true" /> Upstash Redis
              </a>
            </li>
            <li>
              <a
                href="https://reactbits.dev/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaReact aria-hidden="true" /> React Bits
              </a>
            </li>
          </ul>
        </div>
      </GlareHover>
      <GlareHover
        glareColor="#ffffff43"
        glareOpacity={0.3}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={1400}
        playOnce={false}
      >
        <div>
          <h2>About the Cohere API</h2>
          <p>
            The Cohere platform provides access to large language models through
            a simple API interface, enabling natural language processing tasks
            with minimal setup.
          </p>
          <p>
            This application uses Cohere’s chat model with a structured prompt
            to ensure consistent, developer-focused code review output.
          </p>
        </div>
      </GlareHover>
      <GlareHover
        glareColor="#ffffff43"
        glareOpacity={0.3}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={1400}
        playOnce={false}
      >
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
                <FiLinkedin aria-hidden="true" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ivanaogrizovic"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FiGithub aria-hidden="true" /> GitHub
              </a>
            </li>
          </ul>
          <p>Feel free to give feedback and/or suggestions.</p>
        </div>
      </GlareHover>
    </div>
  );
}
