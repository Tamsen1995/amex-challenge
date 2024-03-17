import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "./NavBar";

describe("NavBar component", () => {
  it("renders correctly", () => {
    render(<NavBar />);
    expect(screen.getByText(/AMEX/)).toBeInTheDocument();
    expect(screen.getByText(/Home/)).toBeInTheDocument();
    expect(screen.getByText(/Users/)).toBeInTheDocument();
  });

  it("has correct link hrefs", () => {
    render(<NavBar />);
    expect(screen.getByRole("link", { name: /AMEX/ })).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.getByRole("link", { name: /Home/ })).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.getByRole("link", { name: /Users/ })).toHaveAttribute(
      "href",
      "/users"
    );
  });
});
