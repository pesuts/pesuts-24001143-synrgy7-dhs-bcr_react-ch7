type Props = {
  text: string;
  description: string;
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

export default function FaqList({ text, description, index, activeIndex, setActiveIndex }: Props) {
  const isOpen = index === activeIndex;

  return (
    <div className="shadow-lg">
      <h2 id={`accordion-collapse-heading-${index}`}>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-md focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          onClick={() => setActiveIndex(isOpen ? -1 : index)}
          aria-expanded={isOpen}
          aria-controls={`accordion-collapse-body-${index}`}
        >
          <span>{text}</span>
          <svg
            className={`w-3 h-3 ${isOpen ? 'rotate-180' : ''} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-collapse-body-${index}`}
        className={`transition-[max-height] duration-300 overflow-hidden ${isOpen ? 'max-h-[200px]' : 'max-h-0'}`}
        aria-labelledby={`accordion-collapse-heading-${index}`}
      >
        <div className="p-5 border rounded-md border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-gray-500 dark:text-gray-400 text-justify">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
