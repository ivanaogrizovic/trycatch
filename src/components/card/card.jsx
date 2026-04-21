import "./card.css";

import GlareHover from "../../component/GlareHover";

export default function Card({ children }) {
  return (
    <>
      <div>
        <GlareHover
          glareColor="#ffffff43"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={1400}
          playOnce={false}
        >
          {children}
        </GlareHover>
      </div>
    </>
  );
}
