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

  return (
    <Table>
      <TableHeader columns={columns} />
      <TableContent cars={cars} />
    </Table>
  );
}
