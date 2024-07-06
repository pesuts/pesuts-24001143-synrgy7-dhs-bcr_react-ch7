import { ReactNode, useState } from "react";
import DashboardHeader from "../components/Fragments/Dashboard/DashboardHeader";
import DashboardNav from "../components/Fragments/Dashboard/DashboardNav";

type Props = {
  children?: ReactNode;
  title: string;
};

export default function Dashboard({children, title}: Props) {
  const [isClicked, setIsClicked] = useState(false);

  function onIsClicked(clicked: boolean) { 
    setIsClicked(clicked);
  }

  return (
    <div className="flex min-h-screen">
      <aside className="bg-blue-700 text-white w-64 space-y-6 py-7 px-2">
        <div className="text-center text-2xl font-semibold">Dashboard</div>
        <DashboardNav />
      </aside>

      <div className="flex-1 p-10 bg-slate-100">
        <DashboardHeader title={title} isClicked={isClicked} onClickedProfile={onIsClicked} />

        <div className="overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
