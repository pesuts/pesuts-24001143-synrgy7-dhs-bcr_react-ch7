import { ReactNode } from 'react';
// import NavButton from "../Elements/Button/NavButton";

type Props = {
  // text: string;
  children?: ReactNode; 
};

export default function NavList({ children }: Props) {
  return (
    <li className="nav-item px-2">
      {/* <a
        className="nav-link active font-semibold hover:font-extrabold"
        // href="#our-section"
        href={`#${text.toLowerCase().replace(" ", "-")}`}
      >
        {text}
      </a> */}
      {children}
    </li>
  );
}
