import Navigation from "./components/navigation/navigation";
import { Routes, Route } from "react-router";
import Home from "./routes/home";
import About from "./routes/about";
import "./App.css";

export default function App() {
  return (
    <div className="trycatch-app">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}
