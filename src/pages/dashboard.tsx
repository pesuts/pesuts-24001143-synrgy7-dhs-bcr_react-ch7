import { ReactNode, useState } from "react";
// import DashboardTable from "../components/Layouts/DashboardTable";
import DashboardHeader from "../components/Fragments/Dashboard/DashboardHeader";
import DashboardNav from "../components/Fragments/Dashboard/DashboardNav";

type Props = {
  children?: ReactNode;
  // children2?: ReactNode;
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
          {/* <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  No
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  User Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Car
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Start Rent
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Finish Rent
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">1</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  user@example.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Car Model</td>
                <td className="px-6 py-4 whitespace-nowrap">Start Date</td>
                <td className="px-6 py-4 whitespace-nowrap">Finish Date</td>
                <td className="px-6 py-4 whitespace-nowrap">$100</td>
                <td className="px-6 py-4 whitespace-nowrap">Completed</td>
              </tr>
            </tbody>
          </table> */}
          {/* <DashboardTable /> */}
          {children}
        </div>
      </div>
    </div>
  );
}
