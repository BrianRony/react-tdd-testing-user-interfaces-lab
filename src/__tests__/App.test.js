import { render, screen } from "@testing-library/react";
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm Brian`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm brian/i,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://media.licdn.com/dms/image/D4D03AQFoXWpeO9RnbA/profile-displayphoto-shrink_800_800/0/1715688202313?e=1723680000&v=beta&t=PdnUhln7erB6qKZDm-c3SLi4EIu8s06RguNx5R1ySlU");
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

  const bio = screen.getByText(/I am a passionate software developer with a strong background in web development/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute("href", "https://github.com/BrianRony");
  expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/brian-kiprono/");
});
