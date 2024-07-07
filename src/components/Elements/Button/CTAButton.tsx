import { Link } from "react-router-dom";

type Props = {
  text: string;
  href: string;
  style?: string;
};

export default function CTAButton({ text, href, style }: Props) {
  return (
    <Link to={`/${href}`}
      className={`inline-block mx-auto bg-lime-green text-sm text-white px-3 py-2 
        font-bold rounded hover:bg-lime-green ${style || ''}`.trim()}
    >
      {text}
    </Link>
  );
}
