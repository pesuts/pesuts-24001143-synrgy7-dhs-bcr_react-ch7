import axios from "axios";

const url = import.meta.env.VITE_API_URL + "/cars/";

const token = localStorage.getItem("token");

export type CarInput = {
  model: string;
  plate: string;
  manufacture: string;
  price: number;
  category: string;
  image?: File;
};

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

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
};

export const getApiCars = async () => {
  try {
    const response = await axios.get("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getCars = async () => {
  try {
    const response = await axios.get(url, config);
    return response.data.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getCarById = async (id: string) => {
  try {
    const response = await axios.get(url + id, config);
    return response.data.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const postCar = (
  data: CarInput,
  callback: (status: boolean, res: SuccessResponse | ErrorResponse) => void
) => {
  axios
    .post<SuccessResponse>(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },

    })
    .then((response) => {
      const successResponse: SuccessResponse = response.data;
      callback(true, successResponse);
    })
    .catch((error) => {
      const errorResponse: ErrorResponse = error.response?.data;
      callback(false, errorResponse);
    });
};

export const deleteCar = (
  carId: string,
  callback: (status: boolean, res: SuccessResponse | ErrorResponse) => void
) => {
  axios
    .delete<SuccessResponse>(`${url}/${carId}`, config)
    .then((response) => {
      const successResponse: SuccessResponse = response.data;
      callback(true, successResponse);
    })
    .catch((error) => {
      const errorResponse: ErrorResponse = error.response?.data;
      callback(false, errorResponse);
    });
};

export const updateCar = (
  carId: string,
  data: CarInput,
  callback: (status: boolean, res: SuccessResponse | ErrorResponse) => void
) => {
  axios
    .put<SuccessResponse>(`${url}/${carId}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      const successResponse: SuccessResponse = response.data;
      callback(true, successResponse);
    })
    .catch((error) => {
      const errorResponse: ErrorResponse = error.response?.data;
      callback(false, errorResponse);
    });
};