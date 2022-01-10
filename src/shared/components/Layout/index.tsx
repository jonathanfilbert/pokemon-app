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
      <div className="content-wrapper">{children}</div>
    </LayoutWrapper>
  );
};

export default Layout;
