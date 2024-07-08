import { render, screen } from '@testing-library/react';
import Footer from "../components/Fragments/Footer";
import '@testing-library/jest-dom';

describe('Footer', () => {
  test('renders children correctly', () => {
    render(
      <Footer text='Footer content'>Footer content
      </Footer>
    );
    expect(screen.getByText('Footer content')).toBeInTheDocument();
  });

  describe('Contact', () => {
    test('renders text correctly', () => {
      render(<Footer.Contact text="Contact us" />);
      expect(screen.getByText('Contact us')).toBeInTheDocument();
    });
  });

  describe('NavButton', () => {
    test('renders text and link correctly', () => {
      render(<Footer.NavButton text="Home" />);
      const link = screen.getByRole('link', { name: 'Home' });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/#home');
    });
  });

  describe('SocialMedia', () => {
    test('renders image with correct src and alt attributes', () => {
      render(<Footer.SocialMedia text="facebook" />);
      const img = screen.getByRole('img', { name: 'facebook' });
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', 'img/icons/icon-facebook.png');
      expect(img).toHaveAttribute('alt', 'facebook');
    });
  });
});
