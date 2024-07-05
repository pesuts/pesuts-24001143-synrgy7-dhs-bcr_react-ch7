// import {  } from "@heroicons/react/24/outline";
import { TrashIcon, PencilSquareIcon, ClockIcon, KeyIcon } from "@heroicons/react/24/outline";
import { formatDate } from "../../utils/dateUtils";
// import { PencilSquareIcon } from "@heroicons/react/24/outline";
// import { deleteCar } from "../../services/car.service";

interface ActionDelete { 
  idCar?: string;
  isDeleted: boolean;
}

type Props = {
  id: string;
  imageUrl?: string;
  name: string;
  type: string;
  rentPerDay: number;
  handleActionDeleteCar: (actionDelete: ActionDelete) => void;
  // description: string;
  // capacity: number;
  // transmission: string;
  // year: number;
  updatedAt: Date;
  handleModal: (isModalOpen: boolean) => void;
};

export default function DashboardCarCard({
  id,
  imageUrl,
  name,
  type,
  rentPerDay,
  handleActionDeleteCar,
  // description,
  // capacity,
  // transmission,
  // year,
  updatedAt,
  handleModal
}: Props) {
  return (
    // <div className="max-w-sm">
    <div className="m-1">
      <div className="bg-white shadow-[0_0_3px_3px_rgba(0,0,0,0.1)] rounded-md p-8 border-">
        <img
          src={ (imageUrl) ? `http://localhost:3000${imageUrl}` : "/img/png/innova.png"}
          // className="object-contain py-4 h-64 w-full"
          className="object-cover py-4 h-64 w-full"
          alt="Car"
        />
        <p className="text-[.9rem]">
          {name}/{type}
        </p>
        <p className="font-extrabold py-2">
          Rp {rentPerDay.toLocaleString("id")}/hari
          {/* Rp {rentPerDay}/hari */}
        </p>
        <p className="py-2 text-[.9rem] flex gap-x-3">
          {/* <ClockIcon className="h-5 w-5 -me-1" />Updated at {formatDate(updatedAt)} */}
          <KeyIcon className="h-5 w-5 -me-1" />-
        </p>
        <p className="py-2 text-[.9rem] flex gap-x-3">
          {/* <ClockIcon className="h-5 w-5 -me-1" />Updated at {formatDate(updatedAt)} */}
          <ClockIcon className="h-5 w-5 -me-1" />Updated at {formatDate(updatedAt)}
        </p>
        <div className="flex justify-between gap-4 mt-4">
          <button
            onClick={() => {
              handleModal(true)
              handleActionDeleteCar({
                idCar: id,
                isDeleted: false
              })
            }}
            className="cursor-pointer outline outline-2 outline-red-600 text-red-600 
            font-bold w-full py-2.5 rounded-sm hover:bg-red-600 hover:text-white
            flex items-center justify-center gap-2 text-sm"
            >
            <TrashIcon className="h-5 w-5" /> Delete
          </button>
          <button
            onClick={() => { window.location.href = `/dashboard/cars/edit/${id}`}}
            // onClick={() => { handleModal(true) }}
            className="cursor-pointer bg-lime-green text-white font-bold w-full 
            py-2.5 rounded-sm hover:bg-green-700 flex items-center justify-center gap-2 text-sm">
            <PencilSquareIcon className="h-5 w-5" /> Edit
          </button>
        </div>
      </div>
    </div>
  );
}
