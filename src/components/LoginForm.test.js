import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import LoginForm from "./LoginForm";

test("click to login fail", async () => {
  render(<LoginForm />);

  const btnSubmit = screen.getByTestId("btn-submit");
  fireEvent.click(btnSubmit);

  const alert = screen.getByTestId("error-message").textContent;
  expect(alert).toBe("No Logueado");
});

test("click to login pass", async () => {
  render(<LoginForm />);

  fireEvent.change(screen.getByTestId("email"), {
    target: { value: "afca133@gmail.com" },
  });

  fireEvent.change(screen.getByTestId("discord"), {
    target: { value: "266637783483940865" },
  });

  const btnSubmit = screen.getByTestId("btn-submit");
  fireEvent.click(btnSubmit);

  const alert = screen.getByTestId("error-message").textContent;
  expect(alert).toBe("Logueado");
});
