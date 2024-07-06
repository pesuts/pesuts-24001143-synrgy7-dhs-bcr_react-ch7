// import { useEffect, useState } from "react";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import InputForm from "./InputForm";
import { formatDateInput } from "../../utils/dateUtils";
import {
  postCar,
  updateCar,
  CarInput,
  // SuccessResponse,
  ErrorResponse,
} from "../../services/car.service";

import Modal from "react-modal";
import NotificationBar from "./NotificationBar";
// import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");

type Props = {
  car?: Car;
};

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

const FormDashboard = ({ car }: Props) => {
  const [model, setModel] = useState<string | undefined>();
  const [brand, setBrand] = useState<string | undefined>();
  const [plate, setPlate] = useState<string | undefined>();
  const [price, setPrice] = useState<string | undefined>();
  const [createdAt, setCreatedAt] = useState<Date | undefined>();
  const [updatedAt, setUpdatedAt] = useState<Date | undefined>();
  const [carCategory, setCarCategory] = useState<string | undefined>("Sedan");

  const [file, setFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | undefined>(false);

  
  // useEffect(() => {
  //   if (car?.image_url) { 
  //     setPreviewURL(car.image_url);
  //   }
  // }, []);

  useEffect(() => {
    setModel(car?.model);
    setPlate(car?.plate);
    setBrand(car?.manufacture);
    setPrice(car?.price?.toString());
    if (!carCategory) {
      setCarCategory(car?.category);
    }
    setCreatedAt(car?.created_at);
    setUpdatedAt(car?.updated_at);
    if (car?.image_url) { 
      setPreviewURL(`http://localhost:3000${car.image_url}`);
    }
  }, [car]);

  useEffect(() => {
    console.log("Current previewURL:", previewURL);
  }, [previewURL]);

  const handleModel = (model: string) => {
    setModel(model);
  };

  const handlePlate = (plate: string) => {
    setPlate(plate);
  };

  const handleBrand = (brand: string) => {
    setBrand(brand);
  };

  const handlePrice = (price: string) => {
    setPrice(price);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewURL(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const newCar: CarInput = {
      model: model!,
      plate: plate!,
      manufacture: brand!,
      price: Number(price),
      category: carCategory!,
    };
    if (file) newCar.image = file;
    // console.log(newCar);

    if (car?.id) { 
      // alert("sube");
      updateCar(car.id, newCar, (status, res) => {
        // console.log(res);
        if (status) {
          setNotificationMessage("Berhasil memperbarui data!");
          setIsSuccess(true);
        } else {
          const errorResponse = res as ErrorResponse;
          setIsSuccess(false);
          setNotificationMessage(errorResponse.message);
          // console.log(errorResponse);
          alert(errorResponse.message);
        }
      });
      setIsNotificationVisible(true);
      return;
    }

    
    postCar(newCar, (status, res) => {
      console.log(res);
      if (status) {
        setNotificationMessage("Berhasil menambahkan data!");
        setIsSuccess(true);
      } else {
        const errorResponse = res as ErrorResponse;
        setIsSuccess(false);
        setNotificationMessage(errorResponse.message);
        console.log(errorResponse);
      }
    });
    setIsNotificationVisible(true);
    return;
  };

  const carCategories = [
    "Sedan",
    "SUV",
    "Hatchback",
    "Minivan",
    "Convertible",
    "Coupe",
    "Truck",
    "Wagon",
    "Van",
    "Luxury Sedan",
    "Electric Car",
    "Hybrid",
    "Sports Car",
    "New Category",
  ];

  const selectCarCategories = carCategories.map((category) => (
    <option value={category} key={category}>
      {category}
    </option>
  ));
  console.log("orba");
  console.log(previewURL);

  return (
    <div className="w-7/12 p-2">
      <form className="" onSubmit={handleSubmit} method="post">
        <div className="flex flex-col">
          <div className="p-8">
            <InputForm
              value={model}
              name="model"
              type="text"
              label="Nama/Model"
              mandatory={true}
              placeholder="Masukkan Model / Nama"
              style="mb-4 justify-between flex items-center"
              styleInput="w-[60%]"
              handleInput={handleModel}
            />
            <InputForm
              value={plate}
              name="plate"
              type="text"
              label="Plat Nomor"
              mandatory={true}
              placeholder="Masukkan Plat Nomor"
              style="mb-4 justify-between flex items-center"
              styleInput="w-[60%]"
              handleInput={handlePlate}
            />
            <InputForm
              value={brand}
              name="brand"
              type="text"
              label="Merek"
              mandatory={true}
              placeholder="Masukkan Merek"
              style="mb-4 justify-between flex items-center"
              styleInput="w-[60%]"
              handleInput={handleBrand}
            />
            <InputForm
              value={price}
              name="price"
              type="number"
              label="Harga"
              mandatory={true}
              placeholder="Masukkan harga"
              style="mb-4 justify-between flex items-center"
              styleInput="w-[60%]"
              handleInput={handlePrice}
            />
            <p className="text-gray-400 text-sm ms-[40%] -mt-4">
              File Size Max, 1 MB
            </p>
            <div className="mb-4 justify-between flex items-center">
              <label className="block text-gray-700 font-bold">
                Kategori
                <span className="text-red-700">*</span>
              </label>
              <select
                className="w-[60%] mt-2 p-2 border border-gray-300 rounded text-gray-500"
                value={carCategory}
                onChange={(e) => {
                  setCarCategory(e.target.value);
                  // alert(carCategory);
                }}
              >
                {selectCarCategories}
              </select>
            </div>
            <InputForm
              label="Foto"
              name="fileInput"
              type="file"
              id="fileInput"
              mandatory={false}
              placeholder="Masukkan file foto"
              style="mb-6 justify-between flex items-center"
              styleInput="w-[60%]"
              accept="image/*"
              handleInputFile={handleFileChange}
            />
            {previewURL && (
              <div className="ms-[40%] w-[200px] mb-4">
                <img
                  src={previewURL}
                  // src={(car?.image_url) ? `http://localhost:3000${previewURL}` : previewURL}
                  alt="Input File Image"
                  style={{ width: "200px", height: "auto" }}
                />
              </div>
            )}
            <InputForm
              label="Start Rent"
              name="Start Rent"
              type="text"
              disabled={true}
              style="mb-4 justify-between flex items-center"
              styleInput="w-[60%] border-0"
            />
            <InputForm
              label="Finish Rent"
              name="Finish Rent"
              // type="text"
              // type="date"
              disabled={true}
              style="mb-4 justify-between flex items-center"
              styleInput="w-[60%] border-0"
            />
            {/* <p>{formatDateInput(new Date(createdAt!))}</p> */}
            <InputForm
              value={formatDateInput(new Date(createdAt!))}
              type="date"
              label="Created At"
              name="Created At"
              disabled={true}
              style="mb-4 justify-between flex items-center"
              styleInput="w-[60%] border-0"
            />
            {/* <p>{formatDateInput(new Date(updatedAt!))}</p> */}
            <InputForm
              value={formatDateInput(new Date(updatedAt!))}
              label="Updated At"
              name="Updated At"
              type="date"
              disabled={true}
              style="mb-4 justify-between flex items-center"
              styleInput="w-[60%] border-0"
            />
            <div className="flex w-6/12 gap-8 mt-20">
              <a
                onClick={() => {
                  window.location.href = "/dashboard/cars";
                }}
                className="w-full cursor-pointer text-center outline-[#0C28A5] outline outline-[2.5px] text-[#0C28A5] 
              p-2 rounded font-bold bg-white hover:bg-[#081B6E] hover:text-white"
              >
                Cancel
              </a>
              <button
                type="submit"
                className="w-full bg-[#0C28A5] text-white font-bold p-2 rounded hover:bg-[#081B6E]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
      {isSuccess && (
        <NotificationBar
          message={notificationMessage}
          isVisible={isNotificationVisible}
          isSuccess={isSuccess!}
          onClose={() => setIsNotificationVisible(false)}
        />
      )
      }
      { (isSuccess) ? (window.location.href = "/dashboard/cars") : '' }
    </div>
  );
};

export default FormDashboard;
