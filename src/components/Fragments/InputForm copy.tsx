// import { ChangeEvent } from "react";

// type Props = {
//   handleInput?: (text: string) => void;
//   handleInputFile?: (event: ChangeEvent<HTMLInputElement>) => void;
//   value?: string;
//   name: string;
//   id?: string;
//   type?: string;
//   mandatory?: boolean;
//   disabled?: boolean;
//   label?: string;
//   placeholder?: string;
//   style?: string;
//   styleInput?: string;
//   accept?: string;
// };

// export default function InputForm({
//   handleInput,
//   handleInputFile,
//   value,
//   name,
//   id,
//   mandatory = false,
//   disabled = false,
//   type = "text",
//   label,
//   placeholder,
//   style,
//   styleInput,
//   accept,
// }: Props) {
//   const lowercaseName = name.toLowerCase().replace(" ", "-");
//   const capitalName = name.charAt(0).toUpperCase() + name.slice(1);
//   return (
//     <div className={`mb-4 ${style || ""}`.trim()}>
//       <label htmlFor={lowercaseName} className="block text-gray-700 font-bold">
//         {label || capitalName}
//         {mandatory && <span className="text-red-700">*</span>}
//       </label>
//       <input
//         onChange={
//           (handleInputFile)
//             ? (e) => handleInputFile(e.target!.files!.[0])
//             : (e) => handleInput!(e.target.value)
//         }
//         value={value}
//         name={lowercaseName}
//         type={type}
//         id={id ?? lowercaseName}
//         disabled={disabled}
//         placeholder={placeholder || capitalName}
//         required={true}
//         accept={accept}
//         className={`w-full mt-2 p-2 border border-gray-300 rounded  ${
//           styleInput || ""
//         }`.trim()}
//       />
//     </div>
//   );
// }
