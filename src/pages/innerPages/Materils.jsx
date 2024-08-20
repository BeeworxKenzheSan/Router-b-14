import { useSelector } from "react-redux";
import { AppTitle } from "../../components/UI/Title";

export const Materils = () => {
  const store = useSelector((state) => state);
  return (
    <div>
      <AppTitle>Materils {store.counter}</AppTitle>
    </div>
  );
};
