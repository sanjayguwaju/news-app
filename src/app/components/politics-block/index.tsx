import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PolitcsBlockProps {
  data: any;
}

const PoliticsBlock:React.FC<PolitcsBlockProps> = ({ data }) => {
  console.log("politics block --->", data);

  return (
    <section className="flex justify-center items-center w-full sm:px-6 md:px-8 lg:px-16">
      <div className="flex flex-col w-full max-w-7xl p-4">
        <div className="bg-red-600 text-white px-4 py-2">
          <h2 className="font-bold text-2xl sm:text-xl">राजनीति</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
          {data.blockPosts.map((news, index) => (
            <div key={index} className="overflow-hidden">
              <Image
                src={news?.media?.url}
                alt={news.title}
                className="w-full h-48 object-cover"
                width={300}
                height={200}
              />
              <div className="p-4 bg-white">
              <Link href={`/${news.id}`}>
                <p className="text-black text-center font-bold text-2xl sm:text-base">
                  {news.title}
                </p>
              </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoliticsBlock;
