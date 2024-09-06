import { useEffect, useState } from "react";

export const RaitingForm = ({ buttonText, sohranit, data }) => {
  const [movie, setMovie] = useState("");
  const [raiting, setRaiting] = useState("");
  const [country, setCountry] = useState("");

  const movieValueHandle = (e) => {
    setMovie(e.target.value);
  };
  const raitingValueHandle = (e) => {
    setRaiting(e.target.value);
  };
  const countryValueHandle = (e) => {
    setCountry(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newMovie = { kino: movie, raiting: raiting, country: country };
    sohranit(newMovie);
  };

  useEffect(() => {
    if (data) {
      setCountry(data.country);
      setMovie(data.kino);
      setRaiting(data.raiting);
    }
  }, [data]);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Movie</label>
          <input value={movie} onChange={movieValueHandle} type="text" />
        </div>
        <div>
          <label>Raiting {raiting}</label>
          <input
            min={0}
            max={100}
            type="range"
            value={raiting}
            onChange={raitingValueHandle}
          />
        </div>
        <div>
          <label>Country</label>
          <select
            defaultValue="Country"
            value={country}
            onChange={countryValueHandle}
          >
            <option value="uzb">Uz</option>
            <option value="kgz">Kgz</option>
          </select>
        </div>
        <div>
          <button>{buttonText}</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};
