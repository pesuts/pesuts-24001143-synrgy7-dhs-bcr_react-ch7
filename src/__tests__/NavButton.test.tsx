import { render, screen } from '@testing-library/react';
import NavButton from '../components/Elements/Button/NavButton'; 
import '@testing-library/jest-dom';

test('renders NavButton component correctly', () => {
  const text = 'Home';
  render(<NavButton text={text} />);

  const linkElement = screen.getByText(text);
  
  expect(linkElement).toBeInTheDocument();

  expect(linkElement).toHaveClass('nav-link');
  expect(linkElement).toHaveClass('active');
  expect(linkElement).toHaveClass('font-semibold');
  expect(linkElement).toHaveClass('hover:font-extrabold');

  const expectedHref = `/#${text.toLowerCase().replace(" ", "-")}`;
  expect(linkElement.getAttribute('href')).toBe(expectedHref);
});
