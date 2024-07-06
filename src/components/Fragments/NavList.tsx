import { ReactNode } from 'react';

type Props = {
  children?: ReactNode; 
};

export default function NavList({ children }: Props) {
  return (
    <li className="nav-item px-2">
      {children}
    </li>
  );
}
