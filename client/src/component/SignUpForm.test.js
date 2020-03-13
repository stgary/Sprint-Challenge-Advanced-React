import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AnimalForm from "./AnimalForm";

test("renders correctly", () => {
  render(<SignUpForm />);
});

test("form", () => {
  const { getByLabelText, getByText, findAllByText } = render(<SignUpForm />);

  const firstNameInput = getByLabelText(/first name/i);
  const lastNameInput = getByLabelText(/last name/i);

  fireEvent.change(firstNameInput, {
    target: { name: "firstName", value: "Steve" }
  });
  fireEvent.change(lastNameInput, {
    target: { name: "lastName", value: "Gary" }
  });

  console.log(firstNameInput.value);

  const submitButton = getByText(/submit!/i);

  fireEvent.click(submitButton);


});