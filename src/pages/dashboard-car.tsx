// import { useState } from "react";
// import DashboardTable from "../components/Layouts/DashboardTable";
// import DashboardHeader from "../components/Fragments/Dashboard/DashboardHeader";
// import DashboardNav from "../components/Fragments/Dashboard/DashboardNav";

// export default function DashboardCar() {
//   const [isClicked, setIsClicked] = useState(false);

//   function onIsClicked(clicked: boolean) { 
//     setIsClicked(clicked);
//   }

//   return (
//     <div className="flex min-h-screen">
//       <aside className="bg-blue-700 text-white w-64 space-y-6 py-7 px-2">
//         <div className="text-center text-2xl font-semibold">Dashboard</div>
//         <DashboardNav />
//       </aside>

//       <div className="flex-1 p-10">
//         <DashboardHeader isClicked={isClicked} onClickedProfile={onIsClicked}/>

//         <div className="bg-blue-400 rounded-lg shadow overflow-hidden">
          
//         </div>
//       </div>
//     </div>
//   );
// }
