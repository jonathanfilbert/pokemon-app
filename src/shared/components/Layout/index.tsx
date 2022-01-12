import React from "react";
import Header from "../Header";
import { LayoutWrapper } from "./styles";

type LayoutProps = {
  children: React.FC;
};

/**
 * Layout component that wraps the app and put the header across every screen.
 * @param children - the children to be wrapped and rendered
 */
const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <Header />
      <div className="content-wrapper">{children}</div>
    </LayoutWrapper>
  );
};

export default Layout;
