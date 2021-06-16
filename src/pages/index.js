import React, { useEffect, useRef } from "react";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import { Menu } from "../components/Menu";
import gsap from "gsap";

const IndexPage = ({ transitionStatus }) => {
  return (
    <Layout>
      <Menu />
      <title>Patrick's Portfolio</title>
      <Slider />
    </Layout>
  );
};

export default IndexPage;
