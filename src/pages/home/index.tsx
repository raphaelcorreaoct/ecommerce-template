import React from "react";

import { Button } from "components/Buttons";
import { H1, H2, H3, H4 } from "components/Titles";
import { Wrapper } from "layout";
import MainSlide from "./MainSlide";

const Home = () => {
  return (
    <Wrapper>
      <div className="wrapper">
        <MainSlide />
        <H1>home</H1>
        <H2>home</H2>
        <H3>home</H3>
        <H4>home</H4>
        <Button>APERTE AQUI</Button>
      </div>
    </Wrapper>
  );
};

export default Home;
