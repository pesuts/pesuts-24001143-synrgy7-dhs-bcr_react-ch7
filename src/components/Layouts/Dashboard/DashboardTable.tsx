import Table from "../../Fragments/Dashboard/Table";
import TableHeader from "../../Fragments/Dashboard/TableHeader";
import TableContent from "../../Fragments/Dashboard/TableContent";
import { useContext } from "react";
import { CarsContext } from "../../../contexts/CarsContext";

export default function DashboardTable() {
  const carsContext = useContext(CarsContext);

  if (!carsContext) {
    return null;
  }

  const { cars } = carsContext;

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
    </Table>
  );
}
