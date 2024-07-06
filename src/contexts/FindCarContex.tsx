import { createContext, useState, ReactNode, useEffect } from 'react';
import { getApiCars } from '../services/car.service';

interface Car { 
  id: string;
  driver: boolean;
  plate: string;
  manufacture: string;
  model: string;
  image: string;
  rentPerDay: number;
  capacity: number;
  description: string;
  transmission: string;
  available: boolean;
  type: string;
  year: number;
  options: string[];
  specs: string[];
  availableAt: Date;
}

interface FindCarContextProps {
  cars: Car[];
  filteredCars: Car[];
  setCars: (cars: Car[]) => void;
  setFilteredCars: (cars: Car[]) => void;
}

export const FindCarContex = createContext<FindCarContextProps | undefined>(undefined);

export const FindCarProvider = ({ children }: { children: ReactNode }) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);

  useEffect(() => { 
    const fetch = async () => { 
      const fetchCars = await getApiCars();
      setCars(fetchCars);
      setFilteredCars(fetchCars);
    }

    fetch();
  }, []);

  return (
    <FindCarContex.Provider value={{
      cars,
      filteredCars,
      setFilteredCars,
      setCars,
    }}>
      {children}
    </FindCarContex.Provider>
  );
};

export default FindCarProvider;
