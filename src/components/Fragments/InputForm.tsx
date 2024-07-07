import React, { ChangeEvent, useState } from "react";

type Props = {
  handleInput?: (text: string) => void;
  handleInputFile?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name: string;
  id?: string;
  type?: string;
  mandatory?: boolean;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  style?: string;
  styleInput?: string;
  accept?: string;
  min?: number
};

const InputForm: React.FC<Props> = ({
  handleInput,
  handleInputFile,
  value,
  name,
  id,
  mandatory = false,
  disabled = false,
  type = "text",
  label,
  placeholder,
  style,
  styleInput,
  accept,
  min
}) => {
  const [error, setError] = useState<string | null>(null);
  const lowercaseName = name.toLowerCase().replace(" ", "-");
  const capitalName = name.charAt(0).toUpperCase() + name.slice(1);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (type === "file") {
      if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        const maxSize = 2 * 1024 * 1024; // 1MB
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

        if (file.size > maxSize) {
          setError("File size exceeds 1MB.");
        } else if (!allowedTypes.includes(file.type)) {
          setError("File type must be an image (jpeg, png, gif).");
        } else {
          setError(null);
          if (handleInputFile) {
            handleInputFile(event);
          }
        }
      }
    } else {
      setError(null);
      if (handleInput) {
        handleInput(event.target.value);
      }
    }
  };

  return (
    <div className={`mb-4 ${style || ""} relative`.trim()}>
      <label htmlFor={lowercaseName} className="block text-gray-700 font-bold">
        {label || capitalName}
        {mandatory && <span className="text-red-700">*</span>}
      </label>
      <input
        onChange={handleChange}
        value={type !== "file" ? value : undefined}
        name={lowercaseName}
        type={type}
        id={id ?? lowercaseName}
        disabled={disabled}
        placeholder={placeholder || capitalName}
        required={mandatory}
        accept={accept}
        min={min}
        className={`w-full mt-2 p-2 border border-gray-300 rounded ${
          styleInput || ""
        }`.trim()}
      />
      {error && <p className="text-red-700 absolute right-0 top-16">{error}</p>}
    </div>
  );
};

export default InputForm;
