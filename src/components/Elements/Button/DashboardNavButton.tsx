
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
      className="flex flex-col py-2.5 px-4 rounded transition duration-200 
        items-center text-center justify-center hover:bg-blue-600"
    >
      {children}
      {text}
    </a>
  );
}
