import { render, screen } from "@testing-library/react";
import FirstComponent from "./FirstComponent";

test("renders learn react link", () => {
  render(<FirstComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
