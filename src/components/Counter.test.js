import Counter from "./Counter";
import App from "../App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

describe("Testing the Counter component", () => {
  it("Should be present in the DOM", () => {
    render(<App />);
    let counter = screen.getByTestId("customComponent");

    expect(counter).toBeInTheDocument();
  });

  it("Should be present in the DOM", () => {
    render(<Counter />);
    let incButton = screen.getByText("Increment");

    expect(incButton).toBeInTheDocument();
  });

  it("Should be present in the DOM", () => {
    render(<Counter />);
    let decButton = screen.getByText("Decrement");

    expect(decButton).toBeInTheDocument();
  });

  it("Should click button", () => {
    render(<Counter />);

    let incButton = screen.getByTestId("incBtn");
    userEvent.click(incButton);

    let decButton = screen.getByTestId("decBtn");
    userEvent.click(decButton);
  });

  it("Should call the given function", () => {
    const mockFunc = jest.fn();
    render(<Counter onclick={mockFunc}>Increment</Counter>);

    const incButton = screen.getByTestId("incBtn");
    userEvent.click(incButton);
  });

  it("Should call the given function", () => {
    const mockFunc = jest.fn();
    render(<Counter onclick={mockFunc}>Decrement</Counter>);

    const decButton = screen.getByTestId("decBtn");
    userEvent.click(decButton);
  });

  it("should match the snapshot", () => {
    const tree = renderer.create(<Counter />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
