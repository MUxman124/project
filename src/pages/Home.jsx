import React from "react";
import { Zoom } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

import Header from "../components/Header";
import Catagories from "../components/Catagories";
import Discover from "../components/Discover";
import NewArrival from "../components/NewArrival";
import EventMore from "../components/EventMore";
import ShopFeatured from "../components/ShopFeatured";
import CocktailLounge from "../components/CocktailLounge";

function HomePage() {
  return (
    <>
      <Header />
      <Catagories />
      <Discover />
      <Slide>
        <NewArrival />
      </Slide>
      <Zoom delay={1000} duration={300}>
        <ShopFeatured />
      </Zoom>
      <Fade cascade duration={300}>
        <CocktailLounge />
        <EventMore />
      </Fade>
    </>
  );
}

export default HomePage;
