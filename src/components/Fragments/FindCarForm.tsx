import { useContext, useState } from "react";
import { FindCarContex } from "../../contexts/FindCarContex";

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

export default function FindCarForm() {
  const [driverType, setDriverType] = useState<string | undefined>();
  const [date, setDate] = useState<string | undefined>();
  const [time, setTime] = useState<string | undefined>();
  const [capacity, setCapacity] = useState<string | undefined>();

  const findCarContext = useContext(FindCarContex);

  const { cars, setFilteredCars } = findCarContext!;

  function filterCars(
    formDriver: boolean | "",
    formTanggal: string | "",
    formWaktu: string | "",
    formPenumpang: string = ""
  ): Car[] | undefined {
    if (
      formDriver !== "" &&
      formTanggal !== "" &&
      formWaktu !== "" &&
      formPenumpang !== ""
    )
      return filterCarsWithAllParams(
        // formDriver,
        // formTanggal,
        // formWaktu,
        formPenumpang
      );
    if (formDriver !== "" && formTanggal !== "" && formWaktu !== "")
      // return filterCarsWithDriverDateTime(formDriver, formTanggal, formWaktu);
      return filterCarsWithDriverDateTime();
  }

  function filterCarsWithAllParams(
    // formDriver: boolean,
    // formTanggal: string,
    // formWaktu: string,
    formPenumpang: string
  ): Car[] {
    return cars.filter(
      (car) =>
        car.capacity.toString() == formPenumpang &&
        (new Date(car.availableAt).toISOString()) < (new Date(date + " " + time).toISOString())
    );
  }

  function filterCarsWithDriverDateTime(
    // formDriver: boolean,
    // formTanggal: string,
    // formWaktu: string
  ): Car[] {
    return cars.filter(
      (car) => (new Date(car.availableAt).toISOString()) < (new Date(date + " " + time).toISOString())
    );
  }

  const handleSubmit = () => { 
    event?.preventDefault();

    const data = filterCars(Boolean(driverType), date!, time!, capacity);
    if(data) setFilteredCars(data);
  }

  return (
    <form action="" method="post" onSubmit={handleSubmit}>
      <div className="forms lg:flex justify-evenly gap-x-4">
        <div className="form-driver">
          <p className="mb-2">Tipe Driver</p>
          <select
            name="form-driver"
            id="form-driver"
            required={true}
            onChange={(e) => setDriverType(e.target.value)}
            className="border-gray-100 rounded-md border-2 w-full lg:w-56 py-2 px-4"
          >
            <option value="" hidden>
              Pilih Tipe Driver
            </option>
            <option value="1">Dengan Sopir</option>
            <option value="0">Tanpa Sopir (Lepas Kunci)</option>
          </select>
        </div>

        <div className="form-date">
          <p className="mb-2">Tanggal</p>
          <input
            type="date"
            name="form-date"
            id="form-date"
            required={true}
            onChange={(e) => setDate(e.target.value)}
            className="border-gray-100 rounded-md border-2 w-full lg:w-56 py-2 px-4"
          />
        </div>

        <div className="form-time">
          <p className="mb-2">Waktu Jemput/Ambil</p>
          <input
            type="time"
            name="form-time"
            id="form-time"
            required={true}
            onChange={(e) => setTime(e.target.value)}
            className="border-gray-100 rounded-md border-2 w-full lg:w-56 py-2 px-4"
          />
        </div>

        <div className="form-capacity">
          <p className="mb-2">Jumlah Penumpang (opsional)</p>
          <input
            type="text"
            placeholder="Jumlah Penumpang"
            name="form-capacity"
            id="form-capacity"
            onChange={(e) => setCapacity(e.target.value)}
            className="border-gray-100 rounded-md border-2 w-full lg:w-56 py-2 px-4"
          />
        </div>
        <div className="flex items-end">
          <button
            id="filter-btn"
            className=" bg-lime-green text-sm text-white mt-3 my-2 lg:mt-0 lg:my-0 px-3 py-3 font-bold rounded hover:bg-lime-green-hover"
          >
            Cari Mobil
          </button>
        </div>
      </div>
    </form>
  );
}
