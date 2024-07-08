import { render, screen, fireEvent } from '@testing-library/react';
import FaqList from '../components/Fragments/FaqList';
import '@testing-library/jest-dom';

test('toggle FaqList component open and close', () => {
  const text = 'Question';
  const description = 'This is the answer to the question.';
  const index = 0;
  let activeIndex = -1;
  const setActiveIndex = jest.fn((newIndex) => {
    activeIndex = newIndex;
  });

  const { rerender } = render(
    <FaqList
      text={text}
      description={description}
      index={index}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
    />
  );

  const questionButton = screen.getByRole('button', { name: text });
  expect(questionButton).toBeInTheDocument();

  fireEvent.click(questionButton);
  expect(setActiveIndex).toHaveBeenCalledWith(index);
  rerender(
    <FaqList
      text={text}
      description={description}
      index={index}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
    />
  );

  fireEvent.click(questionButton);
  expect(setActiveIndex).toHaveBeenCalledWith(-1);
});
