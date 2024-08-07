import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt, FaRegComment, FaUser } from "react-icons/fa";
import moment from 'moment-timezone';

interface HeadingBlockProps {
  data: any;
}

const HeadingBlock: React.FC<HeadingBlockProps> = ({ data }) => {
  return (
    <section>
      {data?.blockPosts?.map((item: any, index: number) => {
        const formattedDate = moment(item?.publishDate).tz('Asia/Kathmandu').format('YYYY-MM-DD HH:mm:ss');
        return (
          <div key={index} className="flex flex-col items-center">
            <div className="flex flex-col items-center mt-11 max-md:mt-10 max-md:max-w-full lg:max-w-4xl lg:mx-auto">
              <Link href={`/${item.id}`}>
                <h1 className="text-6xl font-semibold tracking-tighter text-center text-black leading-[96px] max-md:text-4xl">
                  {item.title}
                </h1>
              </Link>
              <div className="flex gap-4 items-center text-xs leading-6 text-center text-black">
                <FaUser className="shrink-0 w-4 h-4" />
                <p className="my-auto text-xs text-zinc-700">{item.author}</p>
                <div className="flex gap-2 self-start items-center">
                  <FaRegCalendarAlt className="shrink-0 w-4 h-4" />
                  <p className="flex-auto">{formattedDate}</p>
                </div>
                <div className="flex gap-2 self-start font-bold whitespace-nowrap items-center">
                  <FaRegComment className="shrink-0 w-4 h-4" />
                  <p className="my-auto">{item.comments || "0"}</p>
                </div>
              </div>
            </div>
            <Image
              src={item?.media?.url}
              alt="News image"
              width={1000}
              height={1000}
              className="mt-8 rounded"
            />
          </div>
        );
      })}
    </section>
  );
};

export default HeadingBlock;
