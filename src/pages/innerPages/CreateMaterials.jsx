import { useDispatch } from "react-redux";
import { Form } from "../../components/UI/Form";
import { AppTitle } from "../../components/UI/Title";

export const CreateMaterials = () => {
  const dispatch = useDispatch();

  const onCreateHandler = (data) => {
    const updateData = { ...data, id: Math.floor(Math.random() * 1000) };
    dispatch({ type: "CREATE", payload: updateData });
  };
  return (
    <div>
      <AppTitle>CreateMaterials</AppTitle>
      <Form onSubmit={onCreateHandler} />
    </div>
  );
};
