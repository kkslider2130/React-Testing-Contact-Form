import React from "react";
import { render, fireEvent, action } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("first name, last name, email, message are rendered", () => {
  const { getByLabelText, getByTestId } = render(<ContactForm />);
  getByLabelText(/first name/i);
  getByLabelText(/last name/i);
  getByLabelText(/email/i);
  getByLabelText(/message/i);
  getByLabelText(/i agree/i);
  getByLabelText(/Title/i);
  getByTestId("submit");
});

test("if inputs are registering correctly", () => {
  const { getByLabelText, getByText, getByTestId } = render(<ContactForm />);
  const fNameInput = getByLabelText(/first Name/i);
  const lNameInput = getByLabelText(/last name/i);
  const emailInput = getByLabelText(/email/i);
  const messageInput = getByLabelText(/message/i);
  const agreeInput = getByLabelText(/i agree/i);
  const titleInput = getByLabelText(/Title/i);

  fireEvent.change(fNameInput, { target: { value: "test firstName" } });
  fireEvent.change(lNameInput, { target: { value: "test lastName" } });
  fireEvent.change(emailInput, { target: { value: "test email" } });
  fireEvent.change(messageInput, { target: { value: "test message" } });
  fireEvent.change(agreeInput, { target: { value: "test yes" } });
  fireEvent.change(titleInput, { target: { value: "test Mr" } });

  expect(fNameInput.value).toBe("test firstName");
  expect(lNameInput.value).toBe("test lastName");
  expect(emailInput.value).toBe("test email");
  expect(messageInput.value).toBe("test message");
  expect(agreeInput.value).toBe("test yes");
  expect(titleInput.value).toBe("Mr");

  fireEvent.click(getByTestId("submit"));
  /* const firstNameText = getByText("123");
  expect(firstNameText).toBeInTheDocument(); */
});

test("if blank spaces are allowed in", () => {
  const { getByLabelText } = render(<ContactForm />);
  const fNameInput = getByLabelText(/first Name/i);
  const lNameInput = getByLabelText(/last name/i);
  const emailInput = getByLabelText(/email/i);
  const messageInput = getByLabelText(/message/i);
  const titleInput = getByLabelText(/Title/i);

  fireEvent.change(fNameInput, { target: { value: " " } });
  fireEvent.change(lNameInput, { target: { value: " " } });
  fireEvent.change(emailInput, { target: { value: " " } });
  fireEvent.change(messageInput, { target: { value: " " } });
  fireEvent.change(titleInput, { target: { value: " " } });

  expect(fNameInput.value).toBe(" ");
  expect(lNameInput.value).toBe(" ");
  expect(emailInput.value).toBe(" ");
  expect(messageInput.value).toBe(" ");
  expect(titleInput.value).toBe("Mr");
});
