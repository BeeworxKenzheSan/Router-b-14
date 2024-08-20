import { useEffect, useState } from "react";

export const Form = ({ onSubmit, data }) => {
  const [value, setValue] = useState("");
  const [id, setId] = useState("");

  const valueChangeHandler = (e) => {
    setValue(e.target.value);
  };

  function onSubmitForm(e) {
    e.preventDefault();
    onSubmit({ id, name: value });
  }

  useEffect(() => {
    if (data) {
      setId(data.id);
      setValue(data.name);
    }
  }, [data]);
  return (
    <form onSubmit={onSubmitForm}>
      <input value={value} onChange={valueChangeHandler} />
      <button type="submit">Save</button>
    </form>
  );
};
