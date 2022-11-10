import React from "react";
import { IChildren } from "~/module/CommonTypes";
import Footer from "../Common/Theme/Footer";
import Header from "../Common/Theme/Header";

const BaseLayout = ({ children }: IChildren) => {
  return (
    <>
      <Header />

      <main>{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
