// import React, { ChangeEvent } from "react";

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

// const InputForm: React.FC<Props> = ({
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
// }) => {
//   const lowercaseName = name.toLowerCase().replace(" ", "-");
//   const capitalName = name.charAt(0).toUpperCase() + name.slice(1);

//   // Fungsi untuk menangani perubahan input
//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     if (type === "file") {
//       // Jika input adalah file, panggil handleInputFile
//       // if (handleInputFile && event.target.files && event.target.files[0]) {
//       //   handleInputFile(event.target.files[0]);
//       // }
//       if (handleInputFile) {
//         handleInputFile(event);
//       }
//     } else {
//       // Jika input bukan file, panggil handleInput
//       if (handleInput) {
//         handleInput(event.target.value);
//       }
//     }
//   };

//   return (
//     <div className={`mb-4 ${style || ""}`.trim()}>
//       <label htmlFor={lowercaseName} className="block text-gray-700 font-bold">
//         {label || capitalName}
//         {mandatory && <span className="text-red-700">*</span>}
//       </label>
//       <input
//         onChange={handleChange}
//         value={type !== "file" ? value : undefined} // Nilai value hanya untuk input bukan file
//         name={lowercaseName}
//         type={type}
//         id={id ?? lowercaseName}
//         disabled={disabled}
//         placeholder={placeholder || capitalName}
//         required={mandatory}
//         accept={accept}
//         className={`w-full mt-2 p-2 border border-gray-300 rounded ${
//           styleInput || ""
//         }`.trim()}
//       />
//     </div>
//   );
// };

// export default InputForm;
