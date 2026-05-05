import CardsList from "../components/cards-list/cards-list";

export default function About() {
  return (
    <main className="trycatch-about">
      <h1>Project Overview</h1>
      <p>Welcome to TRY_CATCH.</p>
      <p>
        TRY_CATCH is a React-based code review tool that uses Cohere’s language
        models to analyze user-submitted code and generate structured,
        engineer-style feedback. The system is designed to emulate a senior
        developer reviewing code, focusing on clarity, correctness, and
        maintainability.
      </p>
      <p>
        The application uses a carefully engineered prompt to ensure consistent
        output formatting, making responses easy to parse and render in the UI.
        Since it relies on a free-tier API, responses may occasionally be
        delayed or rate-limited depending on usage.
      </p>
      <p>
        The project was built as an exploration of integrating large language
        models into real-world developer workflows.
      </p>
      <h2>How it works</h2>
      <p>TRY_CATCH follows a simple request–response pipeline:</p>
      <ol>
        <li>The user submits a code snippet through the UI</li>
        <li>
          {" "}
          The request is sent to a serverless API route (/api/review) Input
          validation is performed (length, type checks) Requests are
          rate-limited using Redis to prevent abuse
        </li>
        <li>
          The code is sent to the Cohere LLM with a structured prompt The model
          returns a formatted code review
        </li>
        <li>
          The result is streamed back and stored in React state for display
        </li>
        <li>
          This flow ensures fast feedback while keeping API usage controlled and
          predictable.
        </li>
      </ol>
      <p>
        This design keeps the system lightweight while ensuring predictable
        output and controlled API usage.
      </p>
      <h2>Core Features</h2>
      <ul className="trycatch-about-ul">
        <li>
          Serverless API route used for simplicity and scalability (Vercel)
        </li>
        <li>
          Redis (Upstash) used for lightweight rate limiting without managing
          infrastructure
        </li>
        <li>
          Cohere <code>chat() </code>endpoint used instead of raw completion for
          better structured responses
        </li>
        <li>Prompt engineering enforces consistent output formatting</li>
        <li>React Context used for global state management of reviews</li>
        <li>
          <code>useRef</code> used to prevent race conditions between multiple
          requests
        </li>
      </ul>

      <CardsList />
      <h2>Limitations</h2>
      <ul className="trycatch-about-ul">
        <li>Responses depend on LLM output quality and may vary</li>
        <li>Free-tier API usage is rate limited</li>
        <li>No persistent backend storage of reviews</li>
        <li>Large codebases may be truncated due to input limits</li>
        <li>
          Reviews are advisory and not a replacement for human code review
        </li>
      </ul>
    </main>
  );
}
