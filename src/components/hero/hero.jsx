import LiquidEther from "../liquid-ether/LiquidEther";
import "./hero.css";

export default function Hero() {
  return (
    <div className="trycatch-hero">
      <div className="trycatch-hero-content">
        <h1 className="trycatch-hero-title">
          Welcome to your AI code reviewer
        </h1>
        <p>Paste your code below and begin.</p>
        <p>Happy coding!</p>
      </div>
      <div style={{ width: "100%", height: 600, position: "relative" }}>
        <LiquidEther
          colors={["#0793cf", "#f684fc", "#9aa4b6"]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          color0="#5227FF"
          color1="#FF9FFC"
          color2="#B497CF"
        />
      </div>
    </div>
  );
}
