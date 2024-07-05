// type Row = {
//   name: string;
//   category: string;
//   price: number;
//   // startRent: Date;
//   // finishRent: Date;
//   createdAt: Date;
//   updatedAt: Date;
// };

import { formatDate } from "../../../utils/dateUtils";

type Car = {
  id: number;
  model: string;
  manufacture: string;
  plate: string;
  image_url: string;
  price: number;
  category: string;
  created_at: Date;
  updated_at: Date;
  available: boolean;
};

// type Props = {
//   rows: Array<Row>;
// };

type Props = {
  cars: Array<Car>;
};

// export default function TableContent({ rows }: Props) {
export default function TableContent({ cars }: Props) {
  // const formatDate = (date: Date) => date.toLocaleDateString();

  // const formatDate = (date: Date): string => {
  //   const day = date.getDate();
  //   const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
  //   const year = date.getFullYear();
  //   // const hours = date.getHours().toString().padStart(2, '0');
  //   // const minutes = date.getMinutes().toString().padStart(2, '0');
  
  //   return `${day} ${month} ${year}`;
  //   // return `${day} ${month} ${year}, ${hours}.${minutes}`;
  // }
  
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {/* {rows.map((row, i) => ( */}
      {cars.map((row, i) => (
        <tr className="hover:bg-blue-100 cursor-pointer" onClick={() => alert(row.model)}>
          <td className="px-6 py-4 whitespace-nowrap">{i+1}</td>
          <td className="px-6 py-4 whitespace-nowrap">{row.model}</td>
          <td className="px-6 py-4 whitespace-nowrap">{row.category}</td>
          <td className="px-6 py-4 whitespace-nowrap">{row.price}</td>
          <td className="px-6 py-4 whitespace-nowrap">-</td>
          <td className="px-6 py-4 whitespace-nowrap">-</td>
          {/* <td className="px-6 py-4 whitespace-nowrap">{formatDate(row.startRent)}</td>
          <td className="px-6 py-4 whitespace-nowrap">{formatDate(row.finishRent)}</td> */}
          <td className="px-6 py-4 whitespace-nowrap">{formatDate(new Date(row.created_at), true)}</td>
          <td className="px-6 py-4 whitespace-nowrap">{formatDate(new Date(row.updated_at), true)}</td>
        </tr>
      ))}
    </tbody>
  );
}
