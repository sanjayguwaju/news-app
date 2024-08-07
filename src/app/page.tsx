"use client"

import { useEffect, useState } from "react";
import { HOMEPAGE_LAYOUT_QUERY } from './libs/api/queries';
import { fetchGraphQL } from "./libs/api/fetchGraphQL";
import Navbar from "./components/navbar";
import ArticleWithHeaderNew from "./components/top-header-block";
import BlockRenderer from "./components/BlockRenderer";

export default function Home() {
  const [homepageLayout, setHomepageLayout] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGraphQL(HOMEPAGE_LAYOUT_QUERY);
        console.log({ data });
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
    <ArticleWithHeaderNew/>
      <Navbar />
      <div className=" bg-blue-400 max-w-6xl mx-auto">
        {homepageLayout?.map((block, index) => (
          <BlockRenderer key={index} block={block} index={index} />
        ))}
      </div>

    </>
  );
}
