import React from "react";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import { Menu } from "../components/Menu";

const IndexPage = () => {
  return (
    <Layout>
      <Menu />
      <title>Patrick's Portfolio</title>
      <Slider />
    </Layout>
  );
};

export default IndexPage;
