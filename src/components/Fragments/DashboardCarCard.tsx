import { TrashIcon, PencilSquareIcon, ClockIcon, KeyIcon } from "@heroicons/react/24/outline";
import { formatDate } from "../../utils/dateUtils";
import { useContext } from "react";
import { CarsContext } from "../../contexts/CarsContext";

type Props = {
  id: string;
  imageUrl?: string;
  name: string;
  type: string;
  rentPerDay: number;
  updatedAt: Date;
};

const defaultPicCard = "https://res.cloudinary.com/dsy1qqzv8/image/upload/v1720341464/gmbuanq99pqylehpglee.png";

export default function DashboardCarCard({
  id,
  imageUrl,
  name,
  type,
  rentPerDay,
  updatedAt,
}: Props) {
  const carsContext = useContext(CarsContext);
  if (!carsContext) {
    return null;
  }

  const {
    actionDelete,
    setActionDelete,
    setIsModalOpen,
  } = carsContext;

  return (
    <div className="m-1">
      <div className="bg-white shadow-[0_0_3px_3px_rgba(0,0,0,0.1)] rounded-md p-8 border-">
        <img
          src={ imageUrl ?? defaultPicCard}
          className="object-contain py-4 h-52 w-full"
          alt="Car"
        />
        <p className="text-[.9rem]">
          {name}/{type}
        </p>
        <p className="font-extrabold py-2">
          Rp {rentPerDay.toLocaleString("id")}/hari
        </p>
        <p className="py-2 text-[.9rem] flex gap-x-3">
          <KeyIcon className="h-5 w-5 -me-1" />-
        </p>
        <p className="py-2 text-[.9rem] flex gap-x-3">
          <ClockIcon className="h-5 w-5 -me-1" />Updated at {formatDate(updatedAt)}
        </p>
        <div className="flex justify-between gap-4 mt-4">
          <button
            onClick={() => {
              setIsModalOpen(true)
              setActionDelete({
                  idCar: id,
                  isDeleted: false
              })
              console.log(actionDelete)
            }}
            className="cursor-pointer outline outline-2 outline-red-600 text-red-600 
            font-bold w-full py-2.5 rounded-sm hover:bg-red-600 hover:text-white
            flex items-center justify-center gap-2 text-sm"
            >
            <TrashIcon className="h-5 w-5" /> Delete
          </button>
          <button
            onClick={() => { window.location.href = `/dashboard/cars/edit/${id}`}}
            className="cursor-pointer bg-lime-green text-white font-bold w-full 
            py-2.5 rounded-sm hover:bg-green-700 flex items-center justify-center gap-2 text-sm">
            <PencilSquareIcon className="h-5 w-5" /> Edit
          </button>
        </div>
      </div>
    </div>
  );
}
