"use client"

import { Children, useEffect, useState } from "react";
import ArticleWithHeaderNew from "../components/article-with-header";
import FavouriteSection from "../components/favourite-section";
import Navbar from "../components/navbar";
import LexicalContent from "../components/LexicalContent";

type ImageProps = { src: string; alt: string; className: string };

type SectionHeaderProps = { text: string };

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const articleData = {
  text: "बिहारका मुख्यमन्त्रीले भने–एक दार्शनिक समाजवादी थिए प्रदिप गिरि",
  subText: "असार ३, जनकपुर ।",
  children: {
    src: "https://res.cloudinary.com/dz3facqgc/image/upload/v1719322207/tqaltpcfdsdkk697jeij.png",
    alt: "उद्धार कार्यको एक दृश्य",
    className: "w-full aspect-[7.69] max-md:max-w-full",
  },
};

const ArticleWithHeader: React.FC<{
  text: string;
  subText: string;
  children?: React.ReactNode;
}> = ({ text, subText, children }) => (
  <section className="flex flex-col items-center max-md:mt-10 max-md:max-w-full">
    <h1 className="text-6xl font-semibold tracking-tighter text-center text-black leading-[96px] max-md:text-4xl">
      {text}
    </h1>
    <p className="text-xl leading-6 text-black"> {subText}</p>
    <hr className="shrink-0 mt-4 border-b border-solid border-stone-300 max-md:max-w-full" />
    {children}
  </section>
);

const LargeSection: React.FC = ({title, content, media}) => (
  <section className="flex flex-col w-[77%] max-md:ml-0 max-md:w-full">
    <ArticleWithHeader text={title} subText={articleData.subText}>
      <Image
        src={media?.url}
        className="max-w-full aspect-[1.49] w-[1100px]"
        alt="News image"
      />
    </ArticleWithHeader>
    <p className="text-xl text-justify mt-4">
      {content && <LexicalContent
        childrenNodes={content}
        locale="en-US"
        lazyLoadImages={true}
      />}
    </p>
  </section>
);

const Sidebar: React.FC = () => (
  <aside className="flex flex-col grow mt-36 text-lg font-medium leading-6 text-black max-md:mt-10">
    <Image
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1548b4265a74defaaa578fc5588814e8255866c78ecd9788455a99f0b2999976?apiKey=364294d949e44cc6a45273c421c40ca2&"
      alt=""
      className="w-full aspect-[0.87]"
    />
    <Image
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/42dae681f9fbcc762700603acd450124f5a072ef2170056cf9d3ba0f6c985222?apiKey=364294d949e44cc6a45273c421c40ca2&"
      alt=""
      className="mt-4 w-full aspect-square"
    />
    <HeaderWithText text="राजा समाचार" />
    <HeaderWithText text="कालवाहक रेल र यात" />
    <HeaderWithText text="६ किलो सुन र ४८ लाख नगदसहित एक व्यक्ति पक्राउ" />
    <HeaderWithText text="मेयर बालेन ब्राजिल प्रस्थान" />
    <HeaderWithText text="मोटरसाइकलको ठक्करबाट पैदलयात्रुको मृत्यु" />
  </aside>
);

const HeaderWithText: React.FC<{ text: string }> = ({ text }) => (
  <div className="w-full h-full flex items-center justify-center p-2 bg-red-600 mb-2">
    <div className="text-center text-white">{text}</div>
  </div>
);

const Single: React.FC = ({ params }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const BASE_URL = 'http://localhost:5000/api';
        const response = await fetch(`${BASE_URL}/single-post/${params.slug}?locale=undefined&draft=false&depth=1`);
        const result = await response.json();
        console.log("result --->", result);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="box-border flex relative flex-col shrink-0">
        <div className="flex flex-col items-center bg-white">
          <ArticleWithHeaderNew />
          <Navbar />
          <section className="max-w-full w-[1130px]">
            <main className="flex gap-5 max-md:flex-col max-md:gap-0">
            {data && <LargeSection title={data.title} content={data.content.root.children} media={data?.media}/>}
              <aside className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
                <Sidebar />
                <FavouriteSection />
              </aside>
            </main>
          </section>
        </div>
      </div>
    </>
  );
};

export default Single;
