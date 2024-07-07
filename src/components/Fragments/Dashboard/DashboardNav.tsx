import { IdentificationIcon, TruckIcon } from "@heroicons/react/24/solid";
import DashboardNavButton from "../../Elements/Button/DashboardNavButton";

export default function DashboardNav() {
  return (
    <nav>
      <DashboardNavButton text="Dashboard" href="dashboard">
        <IdentificationIcon className="h-6 w-6" />
      </DashboardNavButton>
      <DashboardNavButton text="Cars" href="dashboard/cars">
        <TruckIcon className="h-6 w-6" />
      </DashboardNavButton>
    </nav>
  );
}
