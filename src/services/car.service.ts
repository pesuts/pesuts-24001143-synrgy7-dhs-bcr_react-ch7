import axios from "axios";

// URL endpoint API
const url = "http://localhost:3000/api/cars/";

// Bearer token
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJzdXBlcmFkbWluQG1haWwuY29tIiwicm9sZSI6InN1cGVyYWRtaW4iLCJpYXQiOjE3MjAxNzg0NzAsImV4cCI6MTcyMDI2NDg3MH0.rZQm-k3ZT9REgJgqJedsDVPG7hrMXE-KU8JWLEr448E";


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

// Konfigurasi permintaan
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
  // axios.get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
  // .then((response) => {
  //   // handle success
  //   // console.log(response);
  //   const data = response.data;
  //   return data;
  // })
  // .catch((error) => {
  //   // handle error
  //   console.log(error);
  // })
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

// export const postCar = (
//   data: CarInput,
//   callback: (status: boolean, res: SuccessResponse | ErrorResponse) => void
// ) => {
//   axios
//     .post<SuccessResponse>(url, data, config)
//     .then((response) => {
//       const successResponse: SuccessResponse = response.data;
//       callback(true, successResponse);
//     })
//     .catch((error) => {
//       const errorResponse: ErrorResponse = error.response?.data;
//       callback(false, errorResponse);
//     });
// };

// export const postCar = (
//   data: FormData,
//   callback: (status: boolean, res: SuccessResponse | ErrorResponse) => void
// ) => {
//   axios
//     .post<SuccessResponse>(url, data, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     })
//     .then((response) => {
//       const successResponse: SuccessResponse = response.data;
//       callback(true, successResponse);
//     })
//     .catch((error) => {
//       const errorResponse: ErrorResponse = error.response?.data;
//       callback(false, errorResponse);
//     });
// };

export const postCar = (
  data: CarInput,
  // data: FormData,
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