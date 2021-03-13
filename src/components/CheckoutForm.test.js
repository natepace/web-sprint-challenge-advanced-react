import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(
        <CheckoutForm />
    )

});

test("form shows success message on submit with form details", () => {

    render(
        <CheckoutForm />
    )


    const firstName = screen.getByLabelText(/first name/i)
    const lastName = screen.getByLabelText(/last name/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const state = screen.getByLabelText(/state/i)
    const zip = screen.getByLabelText(/zip/i)
    const button = screen.getByRole("button")
    userEvent.type(firstName, "Natey")
    userEvent.type(lastName, 'Watey')
    userEvent.type(address, '1313 Mockinbird lane')
    userEvent.type(city, 'chitown baby')
    userEvent.type(state, 'soviet union')
    userEvent.type(zip, 'zipperooni 111111')
    userEvent.click(button)
    const message = screen.getByTestId(/successMessage/i)
    expect(message).toBeInTheDocument()
    console.log(message)


    });