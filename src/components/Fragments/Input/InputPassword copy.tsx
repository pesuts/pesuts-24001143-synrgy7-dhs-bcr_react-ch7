type Props = {
  id?: string;
  label?: string;
  placeholder?: string;
  text: string;
  style?: string;
  styleInput?: string;
};

export default function InputPassword({ id, label, placeholder, style, styleInput }: Props) {
  return (
    <div className={style}>
      <label htmlFor="password" className="block text-gray-700 font-semibold">
        {label || "password"}
      </label>
      <input
        type="password"
        id={id || "password"}
        placeholder={placeholder || " "}
        className={`w-full mt-2 p-2 border border-gray-300 rounded ${styleInput || ""}`.trim()}
      />
    </div>
  );
}
