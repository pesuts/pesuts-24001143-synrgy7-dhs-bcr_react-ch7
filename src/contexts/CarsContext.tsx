import { createContext, useState, useEffect, ReactNode } from "react";
import { deleteCar, getCars } from "../services/car.service";

interface Car {
  id: number;
  model: string;
  manufacture: string;
  plate: string;
  image_url: string;
  price: number;
  category: string;
  created_at: Date;
  updated_at: Date;
  available: boolean;
}

interface ActionDelete {
  idCar?: string;
  isDeleted: boolean;
}

export interface CarsContextProps {
  cars: Car[];
  actionDelete: ActionDelete;
  isModalOpen: boolean;
  isNotificationVisible: boolean;
  notificationMessage: string;
  isSuccess: boolean | undefined;
  query: string;
  setQuery: (query: string) => void;
  setCars: (cars: Car[]) => void;
  setActionDelete: (actionDelete: ActionDelete) => void;
  setIsModalOpen: (isOpen: boolean) => void;
  setIsNotificationVisible: (isVisible: boolean) => void;
  setNotificationMessage: (message: string) => void;
  setIsSuccess: (isSuccess: boolean | undefined) => void;
}

type CarResponse = {
  id: number;
  model: string;
  plate: string;
  manufacture: string;
  price: number;
  category: string;
  image_url?: string;
  created_at: Date;
  updated_at: Date;
  available: boolean;
};
export interface SuccessResponse {
  status: "Success";
  message: string;
  data: CarResponse;
}

export interface ErrorResponse {
  status: "Error";
  message: string;
}

export const CarsContext = createContext<CarsContextProps | null>(null);

interface Props {
  children: ReactNode;
}

const CarsProvider = ({ children }: Props) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [actionDelete, setActionDelete] = useState<ActionDelete>({
    isDeleted: false,
  });
  const [query, setQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | undefined>(undefined);

  function onClose() { 
    setIsModalOpen(false);
  }

  useEffect(() => {
    if (isNotificationVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // 3 detik
      return () => clearTimeout(timer);
    }
  }, [isNotificationVisible, onClose]);

  useEffect(() => {
    if (query !== "") {
      setCars(cars.filter((car) => car.model.toLowerCase().includes(query)));
    }
  }, [query]);

  useEffect(() => {
    const getCarsState = async () => {
      try {
        const result = await getCars();
        setCars([...result].reverse());
      } catch (error) {
        console.error(error);
      }
    };

    getCarsState();
  }, []);

  useEffect(() => {
    if (actionDelete?.idCar)
    if (actionDelete?.idCar && actionDelete.isDeleted) {
      deleteCar(
        actionDelete.idCar,
        (status: boolean, res: SuccessResponse | ErrorResponse) => {
          if (status) {
            setIsSuccess(true);
            setCars((prevCars) =>
              prevCars.filter((car) => car.id !== Number(actionDelete.idCar))
            );
            setNotificationMessage("Berhasil menghapus data!");
            setIsModalOpen(false);
          } else {
            const errorResponse = res;
            setIsSuccess(false);
            setNotificationMessage(errorResponse.message);
          }
          setIsNotificationVisible(true);
        }
      );
    }
  }, [actionDelete]);

  return (
    <CarsContext.Provider
      value={{
        cars,
        actionDelete,
        isModalOpen,
        isNotificationVisible,
        notificationMessage,
        isSuccess,
        query,
        setQuery,
        setCars,
        setActionDelete,
        setIsModalOpen,
        setIsNotificationVisible,
        setNotificationMessage,
        setIsSuccess,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};

export default CarsProvider;
