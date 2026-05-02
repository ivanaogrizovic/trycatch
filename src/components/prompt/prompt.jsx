import { useState } from "react";
import { useReview } from "../../context/review.context";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { sql } from "@codemirror/lang-sql";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";
import { VscCode } from "react-icons/vsc";
import Button from "../button/button";
import "./prompt.css";

export default function Prompt({ scrollToResponse }) {
  const [code, setCode] = useState("");
  const { reviewCode } = useReview();

  const style = { color: "#38bdf8", fontSize: "1.5rem" };

  return (
    <div className="trycatch-prompt trycatch-card">
      <p className="trycatch-prompt-label">
        <VscCode style={style} /> Your_code
      </p>
      <CodeMirror
        className="trycatch-prompt-area"
        value={code}
        height="200px"
        extensions={[javascript(), python(), java(), sql(), html(), css()]}
        onChange={(value) => setCode(value)}
        theme={tokyoNight}
      />
      <Button
        disabled={!code}
        onClick={() => {
          reviewCode(code);
          scrollToResponse();
        }}
      >
        Review Code
      </Button>
    </div>
  );
}
