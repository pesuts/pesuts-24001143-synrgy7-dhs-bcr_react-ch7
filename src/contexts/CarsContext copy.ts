// import React, { createContext, useState, useEffect, ReactNode } from "react";
// import { getCars, deleteCar } from "../services/car.service";

// interface ActionDelete {
//   idCar?: string;
//   isDeleted: boolean;
// }

// type Car = {
//   id: number;
//   model: string;
//   manufacture: string;
//   plate: string;
//   image_url: string;
//   price: number;
//   category: string;
//   created_at: Date;
//   updated_at: Date;
//   available: boolean;
// };

// interface CarsContextType {
//   cars: Car[];
//   actionDelete?: ActionDelete;
//   isModalOpen: boolean;
//   isNotificationVisible: boolean;
//   notificationMessage: string;
//   isSuccess?: boolean;
//   setActionDelete: React.Dispatch<
//     React.SetStateAction<ActionDelete | undefined>
//   >;
//   setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   setIsNotificationVisible: React.Dispatch<React.SetStateAction<boolean>>;
//   setNotificationMessage: React.Dispatch<React.SetStateAction<string>>;
//   setIsSuccess: React.Dispatch<React.SetStateAction<boolean | undefined>>;
// }

// // Define the default value for the context
// const defaultCarsContextValue: CarsContextType = {
//   cars: [],
//   isModalOpen: false,
//   isNotificationVisible: false,
//   notificationMessage: "",
//   setActionDelete: () => {},
//   setIsModalOpen: () => {},
//   setIsNotificationVisible: () => {},
//   setNotificationMessage: () => {},
//   setIsSuccess: () => {},
// };

// // Create the context with the default value
// const CarsContext = createContext<CarsContextType>(defaultCarsContextValue);

// interface CarsProviderProps {
//   children: ReactNode;
// }

// export const CarsProvider = ({ children }: CarsProviderProps) => {
//   const [cars, setCars] = useState<Car[]>([]);
//   const [actionDelete, setActionDelete] = useState<ActionDelete>();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isNotificationVisible, setIsNotificationVisible] = useState(false);
//   const [notificationMessage, setNotificationMessage] = useState("");
//   const [isSuccess, setIsSuccess] = useState<boolean | undefined>();

//   useEffect(() => {
//     const getCarsState = async () => {
//       try {
//         const result = await getCars();
//         setCars([...result].reverse());
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     getCarsState();
//   }, []);

//   useEffect(() => {
//     if (actionDelete?.idCar && actionDelete.isDeleted === true) {
//       deleteCar(actionDelete.idCar, (status, res) => {
//         console.log(res);
//         if (status) {
//           setIsSuccess(true);
//           setCars((prevCars) =>
//             prevCars.filter((car) => car.id !== Number(actionDelete.idCar))
//           );
//           setNotificationMessage("Berhasil menghapus data!");
//         } else {
//           const errorResponse = res;
//           setIsSuccess(false);
//           setNotificationMessage(errorResponse.message);
//         }
//         setIsNotificationVisible(true);
//       });
//     }
//   }, [actionDelete]);

//   return (
//     <CarsContext.Provider
//       value={{
//         cars,
//         actionDelete,
//         isModalOpen,
//         isNotificationVisible,
//         notificationMessage,
//         isSuccess,
//         setActionDelete,
//         setIsModalOpen,
//         setIsNotificationVisible,
//         setNotificationMessage,
//         setIsSuccess,
//       }}
//     >
//       {children}
//     </CarsContext.Provider>
//   );
// };

// export default CarsContext;
