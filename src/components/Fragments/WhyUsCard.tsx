type Props = {
  text: string;
  icon: string;
  description: string;
};

export default function WhyUsCard({ text, icon, description }: Props) {
  return (
    <div className="border-2 rounded-lg p-6 my-4">
    <img
      src={`img/icons/icon-${icon}.png`}
      className="py-3"
      width="40"
      alt="Thumb Icon"
    />
    <h5 className="mt-2 mb-3 font-bold text-lg">{text}</h5>
    <p>
      {description}
    </p>
  </div>
  );
}
