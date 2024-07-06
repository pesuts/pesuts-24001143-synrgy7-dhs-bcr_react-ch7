// import { ReactNode } from "react";
// import NavButton from "../Elements/Button/NavButton";

import { CalendarDaysIcon, Cog6ToothIcon, UserCircleIcon } from "@heroicons/react/24/solid";

type Props = {
  image: string;
  manufacture: string;
  type: string;
  rentPerDay: number;
  description: string;
  capacity: number;
  transmission: string;
  year: number;
};

export default function CarCard({
  image,
  manufacture,
  type,
  rentPerDay,
  description,
  capacity,
  transmission,
  year,
}: Props) {
  return (
    <div className="max-w-sm">
      <div className="bg-white shadow-[0_0_3px_3px_rgba(0,0,0,0.2)] rounded-md p-8 border-1">
        <img
          src={`img/jpg/${image.split("/")[2]}`}
          className="object-cover py-4 h-64 w-80"
          alt="User 1"
        />
        <p className="text-[.9rem]">
          {manufacture}/{type}
        </p>
        <p className="font-bold py-2">
          Rp {rentPerDay.toLocaleString("id")}/hari
        </p>
        <p className="py-2 text-[.9rem] h-24">{description}</p>
        <p className="py-2 text-[.9rem] flex gap-x-3">
          <UserCircleIcon className="w-5 h-5 -mr-1 text-blue-700"/> {capacity} Orang
        </p>
        <p className="py-2 text-[.9rem] flex gap-x-3">
          <Cog6ToothIcon className="w-5 h-5 -mr-1 text-blue-700"/> {transmission}
        </p>
        <p className="py-2 text-[.9rem] flex gap-x-3">
          <CalendarDaysIcon className="w-5 h-5 -mr-1 text-blue-700"/> Tahun {year}
        </p>
        <button className="bg-lime-green text-white font-bold w-full mt-4 py-4 rounded-sm
          hover:bg-green-800 hover:cursor-pointer">
          Pilih Mobil
        </button>
      </div>
    </div>
  );
}
