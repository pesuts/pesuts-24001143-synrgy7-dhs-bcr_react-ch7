// type OnClickedProfile = () => void;

import { IdentificationIcon, TruckIcon } from "@heroicons/react/24/solid";
import DashboardNavButton from "../../Elements/Button/DashboardNavButton";

// type Props = {
  // title: string;
  // onClickedProfile: (isClicked: boolean) => void;
// };

export default function DashboardNav() {
  return (
    <nav>
      <DashboardNavButton text="Dashboard" href="dashboard">
        <IdentificationIcon className="h-6 w-6 mr-3" />
      </DashboardNavButton>
      <DashboardNavButton text="Cars" href="dashboard/cars">
        <TruckIcon className="h-6 w-6 mr-3" />
      </DashboardNavButton>
    </nav>
  );
}
