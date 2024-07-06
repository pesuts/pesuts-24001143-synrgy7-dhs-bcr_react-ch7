import Table from "../../Fragments/Dashboard/Table";
import TableHeader from "../../Fragments/Dashboard/TableHeader";
import TableContent from "../../Fragments/Dashboard/TableContent";
import { getCars } from "../../../services/car.service";
import { useEffect, useState } from "react";

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

export default function DashboardTable() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const getCarsState = async () => {
      try {
        const result = await getCars();
        // console.log(result);
        setCars(result!);
        console.log("nigga");
      } catch (error) {
        console.error(error);
      }
    };

    getCarsState();
  }, []);

  const columns = [
    "Id",
    "Name",
    "Category",
    "Price",
    "Start Rent",
    "Finish Rent",
    "Created At",
    "Updated At",
  ];

  // const rows = [
  //   {
  //     name: "Item 1",
  //     category: "Category A",
  //     price: 100,
  //     startRent: new Date("2023-01-01"),
  //     finishRent: new Date("2023-01-10"),
  //     createdAt: new Date("2023-01-01"),
  //     updatedAt: new Date("2023-01-02"),
  //   },
  //   {
  //     name: "Item 2",
  //     category: "Category B",
  //     price: 200,
  //     startRent: new Date("2023-02-01"),
  //     finishRent: new Date("2023-02-10"),
  //     createdAt: new Date("2023-02-01"),
  //     updatedAt: new Date("2023-02-02"),
  //   },
  //   {
  //     name: "Item 3",
  //     category: "Category A",
  //     price: 150,
  //     startRent: new Date("2023-03-01"),
  //     finishRent: new Date("2023-03-10"),
  //     createdAt: new Date("2023-03-01"),
  //     updatedAt: new Date("2023-03-02"),
  //   },
  //   {
  //     name: "Item 4",
  //     category: "Category C",
  //     price: 250,
  //     startRent: new Date("2023-04-01"),
  //     finishRent: new Date("2023-04-10"),
  //     createdAt: new Date("2023-04-01"),
  //     updatedAt: new Date("2023-04-02"),
  //   },
  //   {
  //     name: "Item 5",
  //     category: "Category B",
  //     price: 300,
  //     startRent: new Date("2023-05-01"),
  //     finishRent: new Date("2023-05-10"),
  //     createdAt: new Date("2023-05-01"),
  //     updatedAt: new Date("2023-05-02"),
  //   }
  // ];

  return (
    <Table>
      <TableHeader columns={columns} />
      <TableContent cars={cars} />
      {/* <TableContent rows={rows}/> */}
    </Table>
  );
}
