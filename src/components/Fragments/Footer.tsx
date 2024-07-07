import { ReactNode } from "react";

type Props = {
  text: string;
  children?: ReactNode;
};

const Footer = ({ children }: Props) => {
  return { children };
}

const Contact = ({ text }: Props) => {
  return (
    <li className="py-1">
      {text}
    </li>
  );
}

const NavButton = ({ text }: Props) => {
  return (
    <li className="py-2 font-semibold">
      <a href={`/#${text.toLowerCase().replace(" ", "-")}`}
        className="text-decoration-none text-black">
      {text}
    </a>
  </li>
  );
}

const SocialMedia = ({ text }: Props) => {
  return (
    <a href="">
      <img src={`img/icons/icon-${text}.png`} width="30" alt="" />
  </a>
  );
}

Footer.Contact = Contact;
Footer.NavButton = NavButton;
Footer.SocialMedia = SocialMedia;

export default Footer;