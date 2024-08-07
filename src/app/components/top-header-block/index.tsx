import Image from "next/image";
import React from "react";

const ArticleWithHeaderOne: React.FC<{
  text: string;
  subText: string;
  children: React.ReactNode;
}> = ({ text, subText, children }) => (
  <article className="flex flex-col self-start mt-5">
    {children}
    <div className="flex gap-3 mt-1.5">
      <span>{text}</span>
      <span>{subText}</span>
    </div>
  </article>
);

const ArticleWithHeaderNew = () => {
  return (
    <>
        <div className="flex items-center justify-center bg-blue-600">
            <ArticleWithHeaderOne
              text="३ आषाढ २०८१, सोमवार"
              subText="सत्य समाचार सत्य विचार"
            >
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b5c1e622a09aa3289e1da3b858f5609c4042358fa71afde6fd8570d33b9b748?apiKey=364294d949e44cc6a45273c421c40ca2&"
                alt=""
                className="self-center aspect-[5.88] w-[260px]"
                width={600}
                height={400}
              />
            </ArticleWithHeaderOne>
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d482abc7d50f1a5ac3d628e4fdbf87780479ff3d60256fa66f123245caf32ee?apiKey=364294d949e44cc6a45273c421c40ca2&"
              alt=""
              className="aspect-[7.14] w-[646px] max-md:max-w-full hidden md:block"
              width={600}
              height={400}
            />
        </div>
    </>
  );
};

export default ArticleWithHeaderNew;
