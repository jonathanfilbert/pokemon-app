import React from "react";
import PokemonCardLoaderWrapper from "./styles";

const PokemonCardLoader = () => {
  return (
    <PokemonCardLoaderWrapper>
      <div
        className="skeleton-box pokemon-owned-badge"
        style={{ width: "100px" }}
      />
      <span className="skeleton-box image-placeholder"></span>
      <div className="pokemon-card-detail">
        <span
          className="skeleton-box id-placeholder"
          style={{ width: "50px" }}
        />
        <span
          className="skeleton-box id-placeholder"
          style={{ width: "100px" }}
        />
      </div>
    </PokemonCardLoaderWrapper>
  );
};

export default PokemonCardLoader;
