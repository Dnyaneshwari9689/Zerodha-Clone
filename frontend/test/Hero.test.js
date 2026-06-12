import Reacr from 'react';
import {render , screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Hero from "../landing_Page/home/Hero";

//Test Suite
describe('Hero Component' , ()=>{
    test('renders hero image' , ()=>{
        render(<Hero/>);
        const signupButton = screen.getByRole("Button" , {name : "/signup now/i"});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary");
    })
})