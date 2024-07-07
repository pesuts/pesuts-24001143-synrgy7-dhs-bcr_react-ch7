import { ReactNode, useState } from "react";
import DashboardHeader from "../components/Fragments/Dashboard/DashboardHeader";
import DashboardNav from "../components/Fragments/Dashboard/DashboardNav";

type Props = {
  children?: ReactNode;
  title: string;
  type: string;
};

export default function Dashboard({ children, title, type }: Props) {
  const [isClicked, setIsClicked] = useState(false);

  function onIsClicked(clicked: boolean) {
    setIsClicked(clicked);
  }

  return (
    <div className="flex min-h-screen">
      <aside className="flex">
        <div className="bg-blue-bcr text-white w-24 space-y-6 py-7 px-2">
          {/* <div className="text-center text-2xl font-semibold">Dashboard</div> */}
          <a className="cursor-pointer text-center text-2xl font-semibold 
            text-blue-900 p-3 ms-2 bg-white">BCR</a>
          <DashboardNav />
        </div>
        <div className="bg-white text-white w-56 space-y-6 py-7 mt-16">
          <div className="text-gray-500 font-extrabold ms-6">{type}</div>
          <div className="text-gray-800 font-extrabold w-full bg-indigo-200 p-3">
            <p className="ms-3">{title}</p>
          </div>
        </div>
      </aside>

      <div className="flex-1 p-10 bg-slate-100">
        <DashboardHeader
          title={title}
          isClicked={isClicked}
          onClickedProfile={onIsClicked}
        />

        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
