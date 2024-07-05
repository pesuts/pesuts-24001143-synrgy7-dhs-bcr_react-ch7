type Props = {
  text: string;
  href: string;
  style?: string;
};

export default function GreenButton({ text, href, style }: Props) {
  const defaultClassName = "inline-block mx-auto bg-lime-green text-sm text-white px-3 py-2 font-bold rounded hover:bg-lime-green-hove";
  const combinedClassName = `${defaultClassName} ${style || ''}`.trim();
  return (
    <a
      className={combinedClassName}
      href={`/${href}`}
    >
      {text}
    </a>
  );
}
