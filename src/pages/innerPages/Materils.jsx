import { AppTitle } from "../../components/UI/Title";
import { Outlet } from "react-router-dom";

export const Materils = () => {
  return (
    <div>
      <AppTitle>Materils </AppTitle>
      <Outlet />
    </div>
  );
};
