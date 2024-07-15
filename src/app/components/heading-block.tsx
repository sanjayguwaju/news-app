import React from "react";
import { axiosInstance } from "../libs";

type ImageProps = {
  src: string;
  alt?: string;
  className?: string;
};

const Image: React.FC<ImageProps> = ({ src, alt = "", className }) => (
  <img src={src} alt={alt} className={className} loading="lazy" />
);

type NewsItem = {
  imgSrc: string;
  title: string;
  author: string;
  date: string;
  comments: number;
};

const newsItems: NewsItem[] = [
  {
    imgSrc:
      "https://res.cloudinary.com/dz3facqgc/image/upload/v1719322207/tqaltpcfdsdkk697jeij.png",
    title: "जनकपुरधाममा यौनिक तथा लैङ्गिक अल्पसंख्यकले मनाए ‘प्राइड मन्थ",
    author: "पंकज कुमार",
    date: "२०८१ असार ४, सोमबार १५:३०",
    comments: 0,
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dz3facqgc/image/upload/v1719322736/jsqclvbmi1lz42evdqas.jpg",
    title: "संचालनको पहिलो तीन महिनामै इन्दिरा आईभीएफ, नेपालको सफलता दर ९५%",
    author: "पंकज कुमार",
    date: "२०८१ असार ५, मंगलबार १०:००",
    comments: 2,
  },
  // Add more items as needed
];

export default async function HeadingBlock() {

  const res = await axiosInstance()
    .get(`/articles`)
    .then((res) => res?.data);

  const headingBlockItems = res?.docs;
  console.log("headingBlockItems -->", JSON.stringify(headingBlockItems));


  const newsItems = headingBlockItems.map(item => ({
    imgSrc: item.images[0].image.url,
    title: item.title,
    author: item.author.username,
    date: new Date(item.publishedDate).toLocaleDateString('ne-NP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit'
    }).replace(/,/g, ''),
    comments: 0 
  }));

  return (
    <main>
      {newsItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <section className="flex flex-col items-center mt-11 max-md:mt-10 max-md:max-w-full">
            <h1 className="text-6xl font-semibold tracking-tighter text-center text-black leading-[96px] max-md:text-4xl">
              {item.title}
            </h1>
            <div className="flex gap-4 items-center text-xs leading-6 text-center text-black">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/785f9178055e76137606eaeaf6c38134277919243331918c24b50cc5943249f0?apiKey=364294d949e44cc6a45273c421c40ca2&"
                className="shrink-0 aspect-square w-[25px]"
                alt="Author"
              />
              <p className="my-auto text-xs  text-zinc-700">{item.author}</p>
              <div className="flex gap-2 self-start">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/71ce744efe1549f46b172145965010de253751f6cc161a340c382293e0379142?apiKey=364294d949e44cc6a45273c421c40ca2&"
                  className="shrink-0 aspect-[0.87] w-[13px]"
                  alt="Clock"
                />
                <p className="flex-auto">{item.date}</p>
              </div>
              <div className="flex gap-2 self-start font-bold whitespace-nowrap">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/10ca010478e79582dc0631309f8ac4f90e702d91bd38e6f1513ee987205a6309?apiKey=364294d949e44cc6a45273c421c40ca2&"
                  className="shrink-0 w-4 aspect-square"
                  alt="Comments"
                />
                <p className="my-auto">{item.comments}</p>
              </div>
            </div>
          </section>
          <Image
            src={item.imgSrc}
            className="mt-5 max-w-full aspect-[1.49] w-[1100px]"
            alt="News image"
          />
        </div>
      ))}
    </main>
  );
};
