import { ReactTyped } from "react-typed";
import { Link } from "react-router";
import "./navigation.css";

export default function Navigation() {
  return (
    <nav className="trycatch-navigation">
      <div className="trycatch-navigation-content">
        <Link to="/">
          <h2 className="trycatch-title">
            <ReactTyped strings={["Try_catch"]} typeSpeed={60} />
          </h2>
        </Link>
        <Link to="/about">
          <h2>About</h2>
        </Link>
      </div>
    </nav>
  );
}
