import { useState } from "react";
import { useReview } from "../../context/review.context";
import { VscCode } from "react-icons/vsc";
import Card from "../card/card";
import Button from "../button/button";
import "./prompt.css";

export default function Prompt({ scrollToResponse }) {
  const [code, setCode] = useState("");
  const { reviewCode } = useReview();

  const style = { color: "#38bdf8", fontSize: "1.5rem" };

  return (
    <Card>
      <label htmlFor="codePrompt" className="trycatch-prompt-label">
        <VscCode style={style} /> Your_code
      </label>
      <textarea
        id="codePrompt"
        name="codePrompt"
        autoFocus={true}
        className="trycatch-prompt-area"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        aria-label=""
      />
      <Button
        text="Review code"
        disabled={code ? false : true}
        onClick={() => {
          reviewCode(code);
          scrollToResponse();
        }}
      />
    </Card>
  );
}
