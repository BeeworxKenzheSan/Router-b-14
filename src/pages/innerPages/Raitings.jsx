import { Outlet } from "react-router-dom";
import { AppTitle } from "../../components/UI/Title";
import { NavButton } from "../../components/UI/NavButton";
import { ROUTES } from "../../routes/AppRoutes";

export const Raitings = () => {
  return (
    <div>
      <div>
        <AppTitle>Raitings</AppTitle>
        <NavButton to={`${ROUTES.CREATE}`}>Create</NavButton>
      </div>

      <Outlet />
    </div>
  );
};
