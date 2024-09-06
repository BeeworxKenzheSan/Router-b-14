import { useEffect } from "react";
import { AppTitle } from "../../components/UI/Title";
import { useDispatch, useSelector } from "react-redux";
import { getRaitings } from "../../store/raitingReducer/raitingActions";
import { MovieItem } from "../../components/MovieItem";

export const RaitingDoc = () => {
  const { isLoading, items, error } = useSelector((state) => state.r);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRaitings());
  }, [dispatch]);
  return (
    <div>
      <AppTitle>RaitingDoc</AppTitle>
      <div>{isLoading === true ? <div>Loading ...</div> : false}</div>
      <div>{error ? <span style={{ color: "red" }}>{error}</span> : null}</div>

      {items.map((movie) => {
        return <MovieItem key={movie.id} {...movie} />;
      })}
    </div>
  );
};
