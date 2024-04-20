import UserCabinetNavigation from "components/UserCabinetNavigation";
import { Outlet } from "react-router-dom";
import { SCREEN } from "shared/constants/screens";
import { useScreenWidth } from "shared/hooks/useScreenWidth";

export default function UserCabinetLayout(): JSX.Element {
  const windowWidth = useScreenWidth();

  return (
    <section className="m-auto mb-10 grid w-[90vw] md:grid-cols-[4fr_15fr] md:gap-5 [&>div]:h-max [&>div]:rounded-md [&>div]:bg-white [&>div]:p-5 [&>div]:shadow-drop">
      {windowWidth >= SCREEN.MD && <UserCabinetNavigation />}
      <div>
        <Outlet />
      </div>
    </section>
  );
}
