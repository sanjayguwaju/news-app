"use client"

import Image from "next/image";
import Homepage from "./components/homepage";
import Header from "./components/header";
import Popular from "./components/popular";
import Latest from "./components/latest";
import Single from "./components/single";
import EntertainmentBlock from "./components/entertainment-block";
import PoliticsBlock from "./components/politics-block";
import SocietyBlock from "./components/society-block";
import { PhotoFeature } from "./components/photo-features";
import HeadingBlock from "./components/heading-block";
import Footer from "./components/footer";
import FavouriteSection from "./components/favourite-section";
import Nav from "./components/nav";
import Navbar from "./components/navbar";
import MobileNav from "./components/mobile-nav";
import Dropdown from "./components/dropdown";
import ShowRichText from "./components/ShowRichText";
import { useEffect, useState } from "react";
import axiosInstance from "./utils/axiosInstance";
import { fetchHomepageLayout } from "./content/queries1";

export default function Home() {
  const [homepageLayout, setHomepageLayout] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchHomepageLayout();
        console.log("data ---->", data);
      } catch (err) {
        console.error("Error fetching homepage layout", err);
      }
    };

    fetchData();
  }, []);
  console.log("homepageLayout", homepageLayout);
  return (
    <>
      {/* <Header/>
      <Navbar/> */}
      {/* <Homepage/> */}
      {/* <ShowRichText/> */}
      <HeadingBlock />
      {/* <Latest/> */}
      {/* <Popular/> */}
      {/* <Single /> */}
      {/* <SocietyBlock />
      <EntertainmentBlock />
      <PoliticsBlock />
      <PhotoFeature />
      <Footer /> */}
      {/* <Single /> */}
      {/* <MobileNav/> */}
      {/* <Dropdown /> */}
    </>
  );
}
