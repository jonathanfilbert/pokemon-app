import React from "react";
import Header from "../Header";
import { LayoutWrapper } from "./styles";

type LayoutProps = {
  children: React.FC;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
