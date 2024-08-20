import { useSelector } from "react-redux";
import { NavButton } from "../components/UI/NavButton";
import { AppTitle } from "../components/UI/Title";
import { ROUTES } from "../routes/AppRoutes";

export const Schedule = () => {
  const { counter } = useSelector((state) => state);
  return (
    <div>
      <AppTitle>Schedule {counter}</AppTitle>
      <NavButton to={`/${ROUTES.NOTIFICAIONS}`}>Go to Notifaction</NavButton>
    </div>
  );
};
