import { NavButton } from "../components/UI/NavButton";
import { AppTitle } from "../components/UI/Title";
import { ROUTES } from "../routes/AppRoutes";

export const Notifications = () => {
  return (
    <div>
      <AppTitle>Notifications</AppTitle>
      <NavButton to={`/${ROUTES.ANOUNCEMENT}`}>Go to Anounsment</NavButton>
    </div>
  );
};
