type Props = {
  text: string;
};

export default function SideNavButton({ text }: Props) {
  return (
    <a
      className="block py-2 font-semibold"
      href={`#${text.toLowerCase().replace(" ", "-")}`}
    >
      {text}
    </a>
  );
}
