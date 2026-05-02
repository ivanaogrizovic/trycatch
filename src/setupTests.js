// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
// Mock CodeMirror to avoid ESM parsing issues in Jest
// Mock CodeMirror to avoid ESM parsing issues in Jest
jest.mock("@codemirror/lang-javascript", () => ({
  javascript: jest.fn(() => ({})),
}));
jest.mock("@codemirror/lang-python", () => ({
  python: jest.fn(() => ({})),
}));
jest.mock("@codemirror/lang-java", () => ({
  java: jest.fn(() => ({})),
}));
jest.mock("@codemirror/lang-sql", () => ({
  sql: jest.fn(() => ({})),
}));
jest.mock("@codemirror/lang-html", () => ({
  html: jest.fn(() => ({})),
}));
jest.mock("@codemirror/lang-css", () => ({
  css: jest.fn(() => ({})),
}));
jest.mock("@uiw/codemirror-theme-tokyo-night", () => ({
  tokyoNight: {},
}));
