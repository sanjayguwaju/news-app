"use client"

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
import { useEffect, useState } from "react";
import { homepageData } from "./libs/constants/homepage";

export default function Home() {
  const [homepageLayout, setHomepageLayout] = useState<any>(null);

  useEffect(() => {
    setHomepageLayout(homepageData.HomepageLayout.sections as any);
  }, []);

  return (
    <>
      {homepageLayout?.map((block: any, index: number) => {
        switch (block.blockType) {
          case "hero-block":
            return <HeadingBlock key={index} data={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
