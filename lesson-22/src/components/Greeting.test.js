import {render, screen} from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from "@testing-library/user-event";

describe('Greeting component,', () => {
    test('renders Hello World as a text', () => {
        // Arrange
        render(<Greeting/>);

        const helloWorldElement = screen.getByText('Hello World!');
        expect(helloWorldElement).toBeInTheDocument();
    })

    test('renders "good to see you" you not click to button', () => {
        render(<Greeting/>);

        const outPutElement = screen.getByText('good to see you', {exact: false});
        expect(outPutElement).toBeInTheDocument();
    });

    test('renders "Changed!" clicked to button ', () => {
        render(<Greeting/>);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument();
    });

    test('renders "good to see you" if the button was clicked', () => {
        render(<Greeting/>);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const outputElement = screen.queryByText('good to see you', {exact: false});
        expect(outputElement).toBeNull();
    });
});