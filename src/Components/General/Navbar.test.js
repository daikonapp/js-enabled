import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";

test("check for Navbar class", () => {
  const { container } = render(
    <Router>
      <Navbar />
    </Router>
  );
  const navbarElement = container.getElementsByClassName("Navbar");
  expect(navbarElement.length).toBe(1);
});

test("checks if all links have an href", () => {
  const { container } = render(
    <Router>
      <Navbar />
    </Router>
  );
  const linkHrefs = Array.from(container.getElementsByTagName("a")).map((a) =>
    a.getAttribute("href")
  );
  expect(linkHrefs.length).toBe(4);
});

test("checks all link hrefs against expected href list", () => {
  const hrefs = ["/", "/profile", "/feed", "/create"];
  const { container } = render(
    <Router>
      <Navbar />
    </Router>
  );
  const linkHrefs = Array.from(container.getElementsByTagName("a")).map((a) =>
    a.getAttribute("href")
  );
  linkHrefs.forEach((linkHref) => expect(hrefs.includes(linkHref)).toBe(true));
});
