import axios from "axios";

const url = "http://localhost:3000/api/users/";

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface SuccessResponse {
  status: "Success";
  message: string;
  token: string;
}

export interface ErrorResponse {
  status: "Error";
  message: string;
}

export const login = (
  data: LoginData,
  callback: (status: boolean, res: SuccessResponse | ErrorResponse) => void
) => {
  axios
    .post<SuccessResponse>(url + "login", data)
    .then((response) => {
      const successResponse: SuccessResponse = response.data;
      callback(true, successResponse);
    })
    .catch((error) => {
      const errorResponse: ErrorResponse = error.response?.data;
      callback(false, errorResponse);
    });
};

export const register = (
  data: RegisterData,
  callback: (status: boolean, res: SuccessResponse | ErrorResponse) => void
) => {
  axios
  .post<SuccessResponse>(url + "register", data)
    .then((response) => {
      const successResponse: SuccessResponse = response.data;
      callback(true, successResponse);
      // return successResponse;
    })
    .catch((error) => {
      const errorResponse: ErrorResponse = error.response?.data;
      callback(false, errorResponse);
    });
};