import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export const Wrapper: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
