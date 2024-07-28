"use client"

import HeadingBlock from "./components/heading-block";
import { useEffect, useState } from "react";
import { HOMEPAGE_LAYOUT_QUERY } from './libs/api/queries';
import { fetchGraphQL } from "./libs/api/fetchGraphQL";

export default function Home() {
  const [homepageLayout, setHomepageLayout] = useState<any>(null);

  // useEffect(() => {
  //   setHomepageLayout(homepageData.HomepageLayout.sections as any);
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGraphQL(HOMEPAGE_LAYOUT_QUERY);
        console.log({data});
        setHomepageLayout(data?.HomepageLayout?.sections);
      } catch (err) {
        console.log(err);
      } finally {
        console.log("finallyyy");
      }
    };

    fetchData();
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
