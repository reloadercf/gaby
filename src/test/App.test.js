import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Login from '../Components/Login';
import Display from '../Components/Login/Display';

describe("Test del componente Login", () => {
    
    test("Esperamos una imagen", () => {
        let { getByRole } = render(<Display />);
        let role = getByRole("img");
        expect(role).toBeInTheDocument();
    });

    test("Esperamos un input tipo email", () => {
        let{getByPlaceholderText} = render(<Display />);
        let inputEmail= getByPlaceholderText('Email');
        //fireEvent.change(inputEmail, { target: { value: 'gabyalvarzb@gmail.com' } });
        console.log(inputEmail.text())
        expect(inputEmail).toBe("Email");
    });

    test("Esperamos un boton para Login", () => {
        let{getByRole} = render(<Display />);
        let btnLogin= getByRole("button");
        expect(btnLogin).toBeInTheDocument();
    })
    
})