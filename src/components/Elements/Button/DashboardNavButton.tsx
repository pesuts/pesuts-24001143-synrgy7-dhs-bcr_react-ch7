// import { ReactNode } from "react";
// import { IdentificationIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';

type Props = {
  text: string;
  href: string;
  children?: ReactNode;
};

export default function DashboardNavButton({ children, text, href }: Props) {
  return (
    <a
      href={`/${href}`}
      className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600"
    >
      {/* <HomeIcon className="h-6 w-6 text-blue-500" /> */}
      {/* <IdentificationIcon className="h-6 w-6 mr-3" /> */}
      {children}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 12l2-2 4 4 8-8 4 4M21 12v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6"
        />
      </svg> */}
      
      {text}
    </a>
  );
}
