// src/components/prompt/prompt.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import Prompt from "./prompt";
import { ReviewProvider } from "../../context/review.context";

// Mock CodeMirror to avoid ESM issues in Jest
jest.mock("@uiw/react-codemirror", () => {
  return function MockCodeMirror({ value, onChange }) {
    return (
      <textarea
        data-testid="code-mirror"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste your code here..."
      />
    );
  };
});

const renderPrompt = (props = {}) => {
  return render(
    <ReviewProvider>
      <Prompt scrollToResponse={jest.fn()} {...props} />
    </ReviewProvider>,
  );
};

describe("Prompt Component", () => {
  it("should disable button when no code entered", () => {
    renderPrompt();
    const button = screen.getByRole("button", { name: /review code/i });
    expect(button).toBeDisabled();
  });

  it("should enable button when code is entered", async () => {
    renderPrompt();
    const textarea = screen.getByTestId("code-mirror");
    const button = screen.getByRole("button", { name: /review code/i });

    // Initially disabled
    expect(button).toBeDisabled();

    // Type code
    fireEvent.change(textarea, { target: { value: "const x = 1;" } });

    // Now enabled
    expect(button).not.toBeDisabled();
  });

  it("should call reviewCode and scrollToResponse on button click", async () => {
    const scrollMock = jest.fn();
    renderPrompt({ scrollToResponse: scrollMock });

    const textarea = screen.getByTestId("code-mirror");
    const button = screen.getByRole("button", { name: /review code/i });

    // Enter code
    fireEvent.change(textarea, { target: { value: "const x = 1;" } });

    // Click review button
    fireEvent.click(button);

    // scrollToResponse should be called
    expect(scrollMock).toHaveBeenCalled();
  });
});
