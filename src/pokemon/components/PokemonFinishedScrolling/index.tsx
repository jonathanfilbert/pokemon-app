import Image from "next/image";
import React from "react";
import PokemonFinishedScrollingWrapper from "./styles";

const PokemonFinishedScrolling = () => {
  return (
    <PokemonFinishedScrollingWrapper>
      <div className="image-container">
        <Image
          alt="Pokepedia Logo"
          src="/images/pikachu.png"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="end-message">You have reached the end!</div>
    </PokemonFinishedScrollingWrapper>
  );
};

export default PokemonFinishedScrolling;
