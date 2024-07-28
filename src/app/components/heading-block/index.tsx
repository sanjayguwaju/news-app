"use client";

import React from "react";
import Image from "next/image";
import { newsItems } from "./constants";
import Link from "next/link";

interface HeadingBlockProps {
  data: any;
}

const HeadingBlock: React.FC<HeadingBlockProps>  = ({ data }) => {
  console.log("data --->", data);
  const baseUrl = 'http://localhost:5000/api/single-post';
  return (
    <section>
      {data.heroPosts.map((item: any, index: number) => (
        <div key={index} className="flex flex-col items-center">
          <div className="flex flex-col items-center mt-11 max-md:mt-10 max-md:max-w-full">
            <Link href={`/${item.id}`}>
                <h1 className="text-6xl font-semibold tracking-tighter text-center text-black leading-[96px] max-md:text-4xl">
                  {item.title}
                </h1>
            </Link>
            <div className="flex gap-4 items-center text-xs leading-6 text-center text-black">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/785f9178055e76137606eaeaf6c38134277919243331918c24b50cc5943249f0?apiKey=364294d949e44cc6a45273c421c40ca2&"
                className="shrink-0 aspect-square w-[25px]"
                alt="Author"
                height={200}
                width={200}
              />
              <p className="my-auto text-xs  text-zinc-700">{item.author}</p>
              <div className="flex gap-2 self-start">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/71ce744efe1549f46b172145965010de253751f6cc161a340c382293e0379142?apiKey=364294d949e44cc6a45273c421c40ca2&"
                  className="shrink-0 aspect-[0.87] w-[13px]"
                  alt="Clock"
                  height={200}
                  width={200}
                />
                <p className="flex-auto">{item.date}</p>
              </div>
              <div className="flex gap-2 self-start font-bold whitespace-nowrap">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/10ca010478e79582dc0631309f8ac4f90e702d91bd38e6f1513ee987205a6309?apiKey=364294d949e44cc6a45273c421c40ca2&"
                  className="shrink-0 w-4 aspect-square"
                  alt="Comments"
                  height={200}
                  width={200}
                />
                <p className="my-auto">{item.comments}</p>
              </div>
            </div>
          </div>
            <Image
              src={item?.media?.url}
              alt="News image"
              width={1000}
              height={1000}
              className=" mt-8 rounded"
            />
        </div>
      ))}
    </section>
  );
};

export default HeadingBlock;
