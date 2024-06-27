import Image from "next/image";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import Popular from "./components/Popular";
import Latest from "./components/Latest";
import Single from "./components/Single";
import EntertainmentBlock from "./components/EntertainmentBlock";
import PoliticsBlock from "./components/PoliticsBlock";
import SocietyBlock from "./components/SocietyBlock";
import { PhotoFeature } from "./components/PhotoFeature";
import HeadingBlock from "./components/HeadingBlock";
import Footer from "./components/Footer";
import FavouriteSection from "./components/FavouriteSection";
import Nav from "./components/Nav";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Header/>
      {/* <Homepage/> */}
      <Navbar/>
      <HeadingBlock />
      <Latest/>
      {/* <Popular/> */}
      {/* <Single /> */}
      <SocietyBlock />
      <EntertainmentBlock />
      <PoliticsBlock />
      <PhotoFeature />
      <Footer />
      {/* <Single /> */}
    </>
  );
}
