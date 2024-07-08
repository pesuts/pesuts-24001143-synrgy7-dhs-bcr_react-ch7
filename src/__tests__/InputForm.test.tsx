import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputForm from '../components/Fragments/InputForm';

describe('InputForm Component', () => {
  test('renders input with label', () => {
    render(<InputForm name="Test Input" />);
    const label = screen.getByText('Test Input');
    const input = screen.getByLabelText('Test Input');
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test('calls handleInput on text input change', () => {
    const handleInput = jest.fn();
    render(<InputForm name="Test Input" handleInput={handleInput} />);
    const input = screen.getByLabelText('Test Input');
    fireEvent.change(input, { target: { value: 'New value' } });
    expect(handleInput).toHaveBeenCalledWith('New value');
  });

  test('displays error on file input if file is too large', () => {
    const handleInputFile = jest.fn();
    render(<InputForm name="Test File" type="file" handleInputFile={handleInputFile} />);
    const input = screen.getByLabelText('Test File');
    const file = new File(['file content'], 'file.png', { type: 'image/png' });
    Object.defineProperty(file, 'size', { value: 3 * 1024 * 1024 });
    fireEvent.change(input, { target: { files: [file] } });
    const errorMessage = screen.getByText('File size exceeds 1MB.');
    expect(errorMessage).toBeInTheDocument();
  });

  test('calls handleInputFile on valid file input', () => {
    const handleInputFile = jest.fn();
    render(<InputForm name="Test File" type="file" handleInputFile={handleInputFile} />);
    const input = screen.getByLabelText('Test File');
    const file = new File(['file content'], 'file.png', { type: 'image/png' });
    Object.defineProperty(file, 'size', { value: 500 * 1024 });
    fireEvent.change(input, { target: { files: [file] } });
    expect(handleInputFile).toHaveBeenCalledWith(expect.any(Object));
    expect(screen.queryByText('File size exceeds 1MB.')).not.toBeInTheDocument();
  });

  test('displays error on file input if file type is incorrect', () => {
    render(<InputForm name="Test File" type="file" />);
    const input = screen.getByLabelText('Test File');
    const file = new File(['file content'], 'file.txt', { type: 'text/plain' });
    fireEvent.change(input, { target: { files: [file] } });
    const errorMessage = screen.getByText('File type must be an image (jpeg, png, gif).');
    expect(errorMessage).toBeInTheDocument();
  });

  test('displays mandatory asterisk if mandatory prop is true', () => {
    render(<InputForm name="Test Input" mandatory />);
    const asterisk = screen.getByText('*');
    expect(asterisk).toBeInTheDocument();
  });

  test('renders with custom styles', () => {
    const { container } = render(
      <InputForm
        name="Test Input"
        style="custom-style"
        styleInput="custom-input-style"
        styleLabel="custom-label-style"
      />
    );
    const div = container.firstChild;
    const label = screen.getByText('Test Input');
    const input = screen.getByLabelText('Test Input');
    expect(div).toHaveClass('custom-style');
    expect(label).toHaveClass('custom-label-style');
    expect(input).toHaveClass('custom-input-style');
  });
});
