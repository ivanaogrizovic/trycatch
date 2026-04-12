import { ReactTyped } from "react-typed";
import "./navigation.css";
import { Link } from "react-router";

export default function Navigation() {
  return (
    <nav className="-glow">
      <div className="trycatch-navigation">
        <Link to="/">
          <h1 className="trycatch-title">
            <ReactTyped strings={["Try_catch"]} typeSpeed={60} />
          </h1>
        </Link>
        <Link to="/about">
          <h2>About</h2>
        </Link>
      </div>
    </nav>
  );
}
