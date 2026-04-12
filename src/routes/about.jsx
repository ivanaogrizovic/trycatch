import CardsList from "../components/cards-list/cards-list";

export default function About() {
  return (
    <div className="trycatch-about">
      <h2>About</h2>
      <p>Welcome to TRY_CATCH.</p>
      <p>
        A React-based code review tool powered by the Cohere API.
        <br />
        It processes user-submitted code and returns concise feedback on
        readability, structure, and best practices.
      </p>
      <p>Built to explore integrating LLMs into developer workflows.</p>
      <CardsList />
    </div>
  );
}
