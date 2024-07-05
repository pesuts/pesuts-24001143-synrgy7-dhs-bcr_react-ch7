// import { ReactNode, useState } from "react";

// type Props = {
//   type: string;
//   children: ReactNode;
//   header?: string;
//   subHeader?: string;
//   buttonText: string;
// };

// export default function DashboardLayout({children}:Props) {
//   const [isClicked, setIsClicked] = useState(false);

//   return (
//     <div className="flex min-h-screen">
//       <aside className="bg-blue-700 text-white w-64 space-y-6 py-7 px-2">
//         <div className="text-center text-2xl font-semibold">Dashboard</div>
//         <nav>
//           <a
//             href="#"
//             className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 mr-3"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//             Dashboard
//           </a>
//           <a
//             href="#"
//             className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 mr-3"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M3 12l2-2 4 4 8-8 4 4M21 12v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6"
//               />
//             </svg>
//             Cars
//           </a>
//         </nav>
//       </aside>

//       <div className="flex-1 p-10">
//         <header className="flex justify-between items-center mb-8">
//           <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
//           <div className="flex items-center space-x-4">
//             <input
//               type="text"
//               placeholder="Search"
//               className="p-2 border rounded-md"
//             />
//             <div className="relative dropdown" onClick={() => setIsClicked(!isClicked)}>
//               <button className="flex items-center">
//                 <span className="mr-2">Unis Badri</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>
//               {isClicked && (
//                 <div className="dropdown-menu absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                   >
//                     Profile
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                   >
//                     Logout
//                   </a>
//                 </div>
//               )}
//             </div>
//           </div>
//         </header>

              
//       </div>
//     </div>
//   );
// }
