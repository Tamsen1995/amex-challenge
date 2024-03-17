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
});
