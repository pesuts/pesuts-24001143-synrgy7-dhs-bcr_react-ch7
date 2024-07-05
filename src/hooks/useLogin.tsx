// export const

import { useEffect, useState } from "react";
import { decodeJwt, isTokenExpired } from "../utils/jwtVerify";

export const useLogin = () => { 
  // if()
  const [username, setUsername] = useState<string>();

  useEffect(() => { 
    const token = localStorage.getItem("token");
    if (token === null || token === undefined || isTokenExpired(token)) {
      window.location.href = "/login";
      return;
    }
    const payload = decodeJwt(token!);
    setUsername(payload.name);

  }, []);

  return username;
}