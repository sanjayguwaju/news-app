import Image from "next/image";
import React from "react";

interface EntertainmentBlockProps {
    data: any;
  }

const EntertainmentBlock: React.FC<EntertainmentBlockProps> = ({ data }) => {
    return (
        <>
            <div className="max-w-full py-4 lg:max-w-7xl">
                <div className="bg-red-600 text-white p-2 mb-4">
                    <h2 className="font-bold text-2xl sm:text-xl">मनोरञ्जन</h2>
                </div>
                <div className="flex flex-wrap gap-4">
                    <div className="flex-shrink-0 w-full md:w-1/3">
                        <Image
                            src={data?.blockPosts[0].media.url}
                            alt={data?.blockPosts[0].title}
                            className="w-full mb-2"
                            width={300}
                            height={200}
                        />
                        <p className="text-black text-center  text-2xl sm:text-base">
                            {data?.blockPosts[0].title}
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 w-[400px] md:w-[340px]">
                        {data.blockPosts.map((news: any, index: number) => (
                            <div key={index} className="flex items-start space-x-2 w-full">
                                <Image
                                    src={news?.media.url}
                                    alt={news?.imgAlt}
                                    className="w-20 h-20 object-cover"
                                    width={200}
                                    height={200}
                                />
                                <p className="text-black text-justify my-2 text-xl sm:text-base">
                                    {news?.title}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4 w-[400px] md:w-[340px]">
                        {data.blockPosts.map((news: any, index: number) => (
                            <div key={index} className="flex items-start space-x-2 w-full">
                                <Image
                                    src={news?.media?.url}
                                    alt={news?.imgAlt}
                                    className="w-20 h-20 object-cover"
                                    width={300}
                                    height={200}
                                />
                                <p className="text-black text-justify my-2 text-xl sm:text-base">
                                    {news?.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default EntertainmentBlock;
