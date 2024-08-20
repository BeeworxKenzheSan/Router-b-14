import { NavButton } from "../components/UI/NavButton";
import { AppTitle } from "../components/UI/Title";
import { ROUTES } from "../routes/AppRoutes";

export const Anounsments = () => {
  return (
    <div>
      <AppTitle>Anounsments</AppTitle>
      <NavButton to={`/${ROUTES.COURSES}`}>Go to Courses</NavButton>
    </div>
  );
};
