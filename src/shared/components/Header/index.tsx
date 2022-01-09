import Link from "next/link";
import React, { useContext } from "react";
import { PokemonContext } from "../../../pokemon/context";
import { HeaderWrapper } from "./styles";

const Header = () => {
  const { getOwnedPokemonTotalAmount } = useContext(PokemonContext);
  return (
    <HeaderWrapper>
      <Link href="/">
        <div className="header-title">Pokemon App</div>
      </Link>
      <Link href="/pokemon/owned">
        <div className="owned-title">
          Owned ({getOwnedPokemonTotalAmount()})
        </div>
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
