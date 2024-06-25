import Image from "next/image";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import Popular from "./components/Popular";
import Latest from "./components/Latest";
import Single from "./components/Single";
import EntertainmentBlock from "./components/EntertainmentBlock";
import PoliticsBlock from "./components/PoliticsBlock";
import SocietyBlock from "./components/SocietyBlock";

export default function Home() {
  return (
    <>
      {/* <Popular/> */}
      {/* <Header/> */}
      {/* <Homepage/> */}
      {/* <Latest/> */}
      {/* <Single /> */}
      <SocietyBlock/>
      <EntertainmentBlock/>
      <PoliticsBlock/>
    </>
  );
}
