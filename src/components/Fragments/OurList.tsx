type Props = {
  text: string;
};

export default function OurList({ text }: Props) {
  return (
    <li className="py-2">
      <p className="">
        <img src="img/icons/check.png" className="inline h-6 pe-2" alt="" />
        {text}
      </p>
    </li>
  );
}
