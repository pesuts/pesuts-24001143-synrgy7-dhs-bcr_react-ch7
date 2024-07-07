import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default function Table({ children }: Props) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        {children}
      </table>
      <div className="bg-gray-100 px-6 py-3 flex items-center justify-between border-t border-gray-200">
        <span className="text-sm text-gray-700">
          Showing 1 to 10 of 50 entries
        </span>
        <div className="inline-flex -space-x-px">
          <a
            href="#"
            className="px-2 py-2 text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50"
          >
            «
          </a>
          <a
            href="#"
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
          >
            1
          </a>
          <a
            href="#"
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
          >
            2
          </a>
          <a
            href="#"
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
          >
            3
          </a>
          <a
            href="#"
            className="px-2 py-2 text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50"
          >
            »
          </a>
        </div>
      </div>
    </div>
  );
}
