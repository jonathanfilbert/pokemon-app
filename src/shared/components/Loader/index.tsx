import Image from "next/image";
import React from "react";
import { LoaderWrapper } from "./styles";

const Loader = () => {
  return (
    <LoaderWrapper>
      <Image
        src="/images/pokeball.png"
        alt="pokeball"
        width={100}
        height={100}
        className="spinner"
      />
    </LoaderWrapper>
  );
};

export default Loader;
