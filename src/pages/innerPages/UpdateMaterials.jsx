import { useDispatch, useSelector } from "react-redux";
import { Form } from "../../components/UI/Form";
import { AppTitle } from "../../components/UI/Title";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateMaterials = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const materials = useSelector((state) => state.materials.materials);
  const existingMaterial = materials.find((item) => item.id === +id);

  const dispatch = useDispatch();

  const onUpdateHandler = (data) => {
    dispatch({ type: "UPDATE", payload: data });
    navigate(-1);
  };
  return (
    <div>
      <AppTitle>UpdateMaterials</AppTitle>
      <Form onSubmit={onUpdateHandler} data={existingMaterial} />
    </div>
  );
};
