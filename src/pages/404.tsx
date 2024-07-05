type RouteError = {
  error?: string;
  message?: string;
  statusText?: string;
};

import { useRouteError } from "react-router-dom";

export default function ErrorPage() { 
  const error = useRouteError() as RouteError || null;

  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <img src="/img/png/page-error.png" className="w-3/12"/>
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="my-5 text-xl">Sorry, an unexpected error has occured..</p>
      <p className="text-red-700 font-extrabold rounded outline-red-800 outline p-3">{error?.statusText || error?.message}</p>
    </div>
  );

}