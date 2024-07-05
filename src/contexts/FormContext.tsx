// import React, { createContext, useState, ReactNode, ChangeEvent, FormEvent } from 'react';
// import { CarInput, postCar, updateCar, ErrorResponse } from '../services/car.service';

// interface FormContextProps {
//   model: string | undefined;
//   brand: string | undefined;
//   plate: string | undefined;
//   price: string | undefined;
//   carCategory: string | undefined;
//   createdAt: Date | undefined;
//   updatedAt: Date | undefined;
//   file: File | null;
//   previewURL: string | null;
//   isNotificationVisible: boolean;
//   notificationMessage: string;
//   isSuccess: boolean | undefined;
//   setCreatedAt: (createdAt: Date | undefined) => void;
//   setUpdatedAt: (updatedAt: Date | undefined) => void;
//   setModel: (model: string | undefined) => void;
//   setBrand: (brand: string | undefined) => void;
//   setPlate: (plate: string | undefined) => void;
//   setPrice: (price: string | undefined) => void;
//   setCarCategory: (category: string | undefined) => void;
//   setFile: (file: File | null) => void;
//   setPreviewURL: (url: string | null) => void;
//   setIsNotificationVisible: (visible: boolean) => void;
//   setNotificationMessage: (message: string) => void;
//   setIsSuccess: (success: boolean | undefined) => void;
//   handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
// }

// const FormContext = createContext<FormContextProps | undefined>(undefined);

// export const FormProvider = ({ children }: { children: ReactNode }) => {
//   const [model, setModel] = useState<string | undefined>();
//   const [brand, setBrand] = useState<string | undefined>();
//   const [plate, setPlate] = useState<string | undefined>();
//   const [price, setPrice] = useState<string | undefined>();
//   const [carCategory, setCarCategory] = useState<string | undefined>("Sedan");
//   const [createdAt, setCreatedAt] = useState<Date | undefined>();
//   const [updatedAt, setUpdatedAt] = useState<Date | undefined>();
//   const [file, setFile] = useState<File | null>(null);
//   const [previewURL, setPreviewURL] = useState<string | null>(null);
//   const [isNotificationVisible, setIsNotificationVisible] = useState(false);
//   const [notificationMessage, setNotificationMessage] = useState("");
//   const [isSuccess, setIsSuccess] = useState<boolean | undefined>(false);

//   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = event.target.files?.[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setPreviewURL(URL.createObjectURL(selectedFile));
//     }
//   };

//   return (
//     <FormContext.Provider value={{
//       model,
//       brand,
//       plate,
//       price,
//       carCategory,
//       createdAt,
//       updatedAt,
//       file,
//       previewURL,
//       isNotificationVisible,
//       notificationMessage,
//       isSuccess,
//       setModel,
//       setBrand,
//       setPlate,
//       setPrice,
//       setCarCategory,
//       setFile,
//       setCreatedAt,
//       setUpdatedAt,
//       setPreviewURL,
//       setIsNotificationVisible,
//       setNotificationMessage,
//       setIsSuccess,
//       handleFileChange,
//     }}>
//       {children}
//     </FormContext.Provider>
//   );
// };

// export default FormContext;
