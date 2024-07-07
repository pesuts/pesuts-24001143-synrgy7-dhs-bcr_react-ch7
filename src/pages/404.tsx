import { useRouteError } from 'react-router-dom';

type RouteError = {
  error?: string;
  message?: string;
  statusText?: string;
  data?: object;
  status?: number;
};

export default function ErrorPage() {
  const error = useRouteError() as RouteError || null;

  console.error("ErrorPage encountered an error:", error);

  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <img src="/img/png/page-error.png" className="w-3/12" alt="Error" />
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="my-5 text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-red-700 font-bold bg-red-100 rounded outline-red-800 outline p-3">
        {error?.statusText || error?.message || "An unknown error occurred."}
      </p>
    </div>
  );
}
