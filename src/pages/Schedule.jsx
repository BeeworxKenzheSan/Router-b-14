import { useSelector, useDispatch } from "react-redux";
import { NavButton } from "../components/UI/NavButton";
import { AppTitle } from "../components/UI/Title";
import { ROUTES } from "../routes/AppRoutes";

export const Schedule = () => {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <AppTitle>Schedule {counter}</AppTitle>
      <div>
        <button onClick={() => dispatch({ type: "plus" })}>+</button>
        <button onClick={() => dispatch({ type: "minus" })}>-</button>
      </div>
      <NavButton to={`/${ROUTES.NOTIFICAIONS}`}>Go to Notifaction</NavButton>
    </div>
  );
};
