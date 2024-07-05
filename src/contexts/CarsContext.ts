// import React, { createContext, useState, useEffect } from 'react';
// import { getCars, deleteCar } from '../api';

// const CarsContext = createContext();

// export const CarsProvider = ({ children }) => {
//   const [cars, setCars] = useState([]);
//   const [actionDelete, setActionDelete] = useState({});
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isNotificationVisible, setIsNotificationVisible] = useState(false);
//   const [notificationMessage, setNotificationMessage] = useState("");
//   const [isSuccess, setIsSuccess] = useState(undefined);

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
//           setCars((prevCars) => prevCars.filter(car => car.id !== Number(actionDelete.idCar)));
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
//     <CarsContext.Provider value={{
//       cars,
//       actionDelete,
//       isModalOpen,
//       isNotificationVisible,
//       notificationMessage,
//       isSuccess,
//       setActionDelete,
//       setIsModalOpen,
//       setIsNotificationVisible,
//       setNotificationMessage,
//       setIsSuccess
//     }}>
//       {children}
//     </CarsContext.Provider>
//   );
// };

// export default CarsContext;
