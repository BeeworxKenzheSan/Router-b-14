import { useDispatch } from "react-redux";
import { RaitingForm } from "../../components/UI/RaitingForm";
import { AppTitle } from "../../components/UI/Title";
import { createRaiting } from "../../store/raitingReducer/raitingActions";
import { useNavigate } from "react-router-dom";

export const CreateRaiting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sendRequest = (data) => {
    dispatch(createRaiting(data, navigate));
  };
  return (
    <div>
      <AppTitle>CreateRaiting</AppTitle>
      <RaitingForm sohranit={sendRequest} buttonText="Create" />
    </div>
  );
};
