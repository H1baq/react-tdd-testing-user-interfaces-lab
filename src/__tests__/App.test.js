import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm Hibaq`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm hibaq/i,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);
  const image = screen.getByAltText("My profile pic");
  expect(image).toHaveAttribute(
    "src",
    "https://i.pinimg.com/236x/c7/e1/48/c7e1485474978ec0fbd56f33fd2935df.jpg"
  );
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);
  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);
  const bio = screen.getByText(/software engineer student at moringa/i);
  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });

  expect(githubLink).toHaveAttribute("href", "https://github.com/H1baq");
  expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/Hibaq");
});
