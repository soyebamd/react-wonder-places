import { useState } from "react";

const Card = ({
  id,
  continent,
  name,
  capital,
  wonder,
  image,
  description,
  handleDesc,
}) => {
  const [desc, showDesc] = useState(false);

  return (
    <div className="country-card">
      <img src={image} alt={wonder} className="country-card__image" />

      <div className="country-card__content">
        <span className="country-card__continent">🌏 {continent}</span>

        <h2 className="country-card__title">{name}</h2>

        <div className="country-card__info">
          <p>
            <strong>Capital:</strong> {capital}
          </p>

          <p>{wonder}</p>
        </div>

        <button className="country-card__btn" onClick={() => handleDesc(id)}>
          Explore →
        </button>
      </div>
    </div>
  );
};

export default Card;
