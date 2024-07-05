// type Props = {
//   type: string;
//   children: ReactNode;
//   header?: string;
//   subHeader?: string;
//   buttonText: string;
// };

import { useContext } from "react";
import DashboardCarCard from "../Fragments/DashboardCarCard";
// import { getCars, deleteCar, ErrorResponse } from "../../services/car.service";
// import { deleteCar } from "../../services/car.service";
import NotificationModal from "../Fragments/NotificationModal";
import NotificationBar from "../Fragments/NotificationBar";
import { CarsContext } from "../../contexts/CarsContext";
// import getCars from "../../services/car.service";

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

export default function DashboardCars() {
  // const [cars, setCars] = useState<Car[]>([]);
  
  // const [actionDelete, setActionDelete] = useState<ActionDelete>();

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  // const [notificationMessage, setNotificationMessage] = useState("");
  // const [isSuccess, setIsSuccess] = useState<boolean | undefined>();
  
  const carsContext = useContext(CarsContext);

  if (!carsContext) {
    return null;
  }

  const {
    cars,
    setIsNotificationVisible,
    // actionDelete,
    // isModalOpen,
    // isNotificationVisible,
    // notificationMessage,
    // isSuccess,
    // setActionDelete,
    // setIsModalOpen,
    // setNotificationMessage,
    // setIsSuccess
  } = carsContext;

  // const handleModal = (isModalOpen: boolean) => { 
  //   setIsModalOpen(isModalOpen);
  // }

  // const handleActionDeleteCar = (actionDelete: ActionDelete) => { 
  //   setActionDelete(actionDelete);
  // }

  // useEffect(() => {
  //   const getCarsState = async () => {
  //     try {
  //       const result = await getCars();
  //       // setCars(result!);
  //       setCars([...result].reverse());
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   getCarsState();
  // }, []);

  // useEffect(() => {
  //   if (actionDelete?.idCar && actionDelete.isDeleted === true) { 
  //     deleteCar(actionDelete.idCar, (status, res) => {
  //       console.log(res);
  //       if (status) {
  //         setIsSuccess(true);
  //         setCars((prevCars) => prevCars.filter(car => car.id !== Number(actionDelete.idCar)));
  //         setNotificationMessage("Berhasil menghapus data!");
  //       } else {
  //         const errorResponse = res as ErrorResponse;
  //         setIsSuccess(false);
  //         setNotificationMessage(errorResponse.message);
  //       }
  //       setIsNotificationVisible(true);
  //     });
  //   }
  // }, [actionDelete]);

  return (
    <>
      <div className="flex justify-end mb-6">
        <button
          onClick={() => {
            window.location.href = "/dashboard/cars/add";
          }}
          className="bg-[#0C28A5] text-white font-bold items-end justify-end pb-3 pt-2 
            px-4 rounded-md hover:bg-[#081B6E]"
        >
          <span className="text-xl me-2">+</span> Add New Car
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6 bg-slate-100">
        {/* cars.map((car) => ( */}
        {cars.map((car) => (
          <DashboardCarCard
            // handleActionDeleteCar={handleActionDeleteCar}
            imageUrl={car.image_url}
            id={car.id.toString()}
            name={car.model}
            rentPerDay={car.price}
            type={car.category}
            updatedAt={new Date(car.updated_at)}
            key={car.id}
            // handleModal={handleModal}
          />
        ))}
      </div>
      <NotificationModal
        // isOpen={isModalOpen}
        // idCar={actionDelete?.idCar}
        // handleActionDeleteCar={handleActionDeleteCar}
        // onRequestClose={() => setIsModalOpen(false)}
        message=" Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?"
        title="Menghapus Data Mobil"
      />
      <NotificationBar
        
        // message={notificationMessage}
        // isVisible={isNotificationVisible}
        // isSuccess={isSuccess!}
        onClose={() => setIsNotificationVisible(false)}
      />
    </>
  );
}
