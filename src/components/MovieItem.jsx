import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/AppRoutes";

export const MovieItem = (props) => {
  const { id, kino, raiting, country } = props;
  return (
    <div>
      <div>
        <strong>{kino}</strong>
        <strong>{raiting}</strong>
        <strong>{country}</strong>
      </div>
      <div>
        <button>
          <Link to={`${ROUTES.UPDATE}/${id}`}>Update</Link>
        </button>
      </div>
    </div>
  );
};
