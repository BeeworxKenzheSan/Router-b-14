import { useNavigate, useParams } from "react-router-dom";
import { RaitingForm } from "../../components/UI/RaitingForm";
import { AppTitle } from "../../components/UI/Title";
import { useDispatch } from "react-redux";
import {
  getById,
  updateRaiting,
} from "../../store/raitingReducer/raitingActions";
import { useEffect, useState } from "react";

export const UpdateRaiting = () => {
  const [data, setData] = useState({});

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const updateRequset = (data) => {
    dispatch(updateRaiting(id, data, navigate));
  };

  const getRaiting = async () => {
    const result = await dispatch(getById(id));
    setData(result);
  };

  useEffect(() => {
    getRaiting();
  }, [dispatch, id]);
  return (
    <div>
      <AppTitle>UpdateRaiting</AppTitle>
      <RaitingForm data={data} sohranit={updateRequset} buttonText="Edit" />
    </div>
  );
};
