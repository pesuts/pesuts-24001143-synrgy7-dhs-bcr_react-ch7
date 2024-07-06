import { useParams } from "react-router-dom";
import FormDashboard from "../../Fragments/FormDashboard";
import { useEffect, useState } from "react";
import { getCarById } from "../../../services/car.service";

type Car = {
  id: string;
  model?: string;
  plate?: string;
  manufacture?: string;
  price?: number;
  category?: string;
  image_url?: string;
  created_at?: Date;
  updated_at?: Date;
};

export default function DashboardForm() {
  const { id } = useParams();
  const [car, setCar] = useState<Car>();

  useEffect(() => {
    if (id) {
      const fetchCar = async () => {
        try {
          const result = await getCarById(id);
          setCar(result[0]!);
        } catch (error) {
          console.log(error);
        }
      };

      fetchCar();
    }
  }, [id]);

  return (
    <div className="bg-white ">
      <FormDashboard car={car} />
    </div>
  );
}
