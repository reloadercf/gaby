import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Login from '../Components/Login';

describe("Test del componente Login", () => {
    test("Esperamos una imagen", () => {
        let{getByRole} = render(<Login />);
        let role= getByRole("img");
        expect(role).toBeInTheDocument();
    });

    test("Esperamos un input tipo email", () => {
        let{getByPlaceholderText} = render(<Login />);
        let inputEmail= getByPlaceholderText('Email');
        fireEvent.change(inputEmail, { target: { value: 'gabyalvarzb@gmail.com' } });
        expect(inputEmail.value).toBe('gabyalvarzb@gmail.com');
    });

    test("Esperamos un boton para Login", () => {
        let{getByRole} = render(<Login />);
        let btnLogin= getByRole("button");
        expect(btnLogin).toBeInTheDocument();
    })
    
})