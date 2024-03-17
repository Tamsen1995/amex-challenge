import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserCard from "./UserCard";

describe("UserCard component", () => {
  const mockUser = {
    login: { uuid: "123" },
    name: { title: "Mr", first: "John", last: "Doe" },
    dob: { age: 30, date: "1991-01-01" },
    location: {
      street: { number: 123, name: "Main St" },
      city: "City",
      state: "State",
      country: "Country",
      postcode: "12345",
    },
    email: "john.doe@example.com",
    phone: "123-456-7890",
    picture: { large: "https://example.com/john.jpg" },
  };

  it("renders correctly", () => {
    render(<UserCard user={mockUser} index={0} />);
    expect(screen.getByText(/Mr John Doe/)).toBeInTheDocument();
    expect(screen.getByText(/Age: 30/)).toBeInTheDocument();
    expect(screen.getByText(/City: City/)).toBeInTheDocument();
  });
});
