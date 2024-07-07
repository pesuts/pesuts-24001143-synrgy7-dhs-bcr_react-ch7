import { useContext } from "react";
import DashboardCarCard from "../../Fragments/DashboardCarCard";
import NotificationModal from "../../Fragments/NotificationModal";
import NotificationBar from "../../Fragments/NotificationBar";
import { CarsContext } from "../../../contexts/CarsContext";

export default function DashboardCars() {
  const carsContext = useContext(CarsContext);

  if (!carsContext) {
    return null;
  }

  const { cars, setIsNotificationVisible } = carsContext;

  return (
    <>
      <div className="flex justify-end mb-6">
        <button
          onClick={() => {
            window.location.href = "/dashboard/cars/add";
          }}
          className="bg-blue-bcr text-white font-bold items-end justify-end pb-3 pt-2 
            px-4 rounded-md hover:bg-[#081B6E]"
        >
          <span className="text-xl me-2">+</span> Add New Car
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6 bg-slate-100">
        {cars.map((car) => (
          <DashboardCarCard
            imageUrl={car.image_url}
            id={car.id.toString()}
            name={car.model}
            rentPerDay={car.price}
            type={car.category}
            updatedAt={new Date(car.updated_at)}
            key={car.id}
          />
        ))}
      </div>
      <NotificationModal
        message=" Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?"
        title="Menghapus Data Mobil"
      />
      <NotificationBar onClose={() => setIsNotificationVisible(false)} />
    </>
  );
}
