type Props = {
  text: string;
};

export default function NavButton({ text }: Props) {
  return (
    <a
      className="nav-link active font-semibold hover:font-extrabold"
      href={`/#${text.toLowerCase().replace(" ", "-")}`}
    >
      {text}
    </a>
  );
}
