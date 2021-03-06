import React from "react";
import Image from "next/image";
import LogoWrapper from "./styles";
import Link from "next/link";

/**
 * Logo component
 *
 */
const Logo = () => {
  return (
    <Link href="/">
      <LogoWrapper>
        <div className="logo-image-wrapper">
          <Image
            alt="Pokepedia Logo"
            src="/images/pikachu.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="logo-text">Pokepedia</div>
      </LogoWrapper>
    </Link>
  );
};

export default Logo;
