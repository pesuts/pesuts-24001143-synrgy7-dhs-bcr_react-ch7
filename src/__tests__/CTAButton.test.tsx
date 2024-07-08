import { render, screen } from '@testing-library/react';
import CTAButton from '../components/Elements/Button/CTAButton';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('CTAButton', () => {
  it('renders CTAButton component correctly', () => {
    const text = 'Click Me';
    const href = 'home';
    const style = 'extra-styles';

    render(
      <Router>
        <CTAButton text={text} href={href} style={style} />
      </Router>
    );

    const buttonElement = screen.getByText(text);
    
    expect(buttonElement).toBeInTheDocument();

    expect(buttonElement).toHaveClass('inline-block', 'mx-auto', 'bg-lime-green', 'text-sm', 'text-white', 'px-3', 'py-2', 'font-bold', 'rounded', 'hover:bg-lime-green', 'extra-styles');

    expect(buttonElement).toHaveAttribute('href', `/${href}`);
  });

  it('applies default styles if no additional style is provided', () => {
    const text = 'Default Style';
    const href = 'default';

    render(
      <Router>
        <CTAButton text={text} href={href} />
      </Router>
    );

    const buttonElement = screen.getByText(text);

    expect(buttonElement).toBeInTheDocument();

    expect(buttonElement).toHaveClass('inline-block', 'mx-auto', 'bg-lime-green', 'text-sm', 'text-white', 'px-3', 'py-2', 'font-bold', 'rounded', 'hover:bg-lime-green');

    expect(buttonElement).toHaveAttribute('href', `/${href}`);
  });
});
