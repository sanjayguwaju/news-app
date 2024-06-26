import React from 'react'

type ImageProps = { src: string; alt: string; className: string };

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const RelatedNewsSection: React.FC<{
    newsHeadlines: { src: string; alt: string; text: string }[];
  }> = ({ newsHeadlines }) => (
    <section className="px-5 mt-4 max-w-full w-[823px]">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {newsHeadlines.map(({ src, alt, text }, index) => (
          <RelatedNewsItem key={index} src={src} alt={alt} text={text} />
        ))}
      </div>
    </section>
  );
  
  const RelatedNewsItem: React.FC<{ src: string; alt: string; text: string }> = ({
    src,
    alt,
    text,
  }) => (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col text-lg font-medium leading-6 text-black max-md:mt-10">
        <div className="flex gap-5 justify-between">
          <Image
            src={src}
            alt={alt}
            className="shrink-0 self-start w-20 aspect-[1.23]"
          />
          <div>{text}</div>
        </div>
      </div>
    </div>
  );

const RelatedNewsSectionNew = () => {
    const newsHeadlines = [
        {
          src: "https://res.cloudinary.com/dz3facqgc/image/upload/v1719322207/tqaltpcfdsdkk697jeij.png",
          alt: "",
          text: "६ किलो सुन र ४८ लाख नगदसहित एक व्यक पक्राउ",
        },
        {
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2265bef9b26f450b971f3d69271698a4869756a17a8240480465670c04886009?apiKey=364294d949e44cc6a45273c421c40ca2&",
          alt: "",
          text: "ठुलू आवाषक निर्माणको तयारीमा नुवाकोट",
        },
        {
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e112dd07267a035c71c5e3b407da9c8f5b436d28b52f90e6801e15aab45a6250?apiKey=364294d949e44cc6a45273c421c40ca2&",
          alt: "",
          text: "मनोरञ्जन: नेपालले एतिहासिक खेलो जित्यो",
        },
        {
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/269a643cb90a360acaf4e16a080d914c29bfaf6748075fb4b0e93585c3f47d39?apiKey=364294d949e44cc6a45273c421c40ca2&",
          alt: "",
          text: "याे भने व्यावसायिक उडानको प्राथमिकता आँजूको मैदानमा",
        },
        {
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e7015f600482a2f740a79402b171d7cde9ffc88ddb4b2cb60089bcb4b0d41f8b?apiKey=364294d949e44cc6a45273c421c40ca2&",
          alt: "",
          text: "ुअत बिहीबार आफ्नो पहिलो २०१९ को यात्रा गर्ने तयारी",
        },
      ];
  return (
    <>
          <RelatedNewsSection newsHeadlines={newsHeadlines} />

    </>
  )
}

export default RelatedNewsSectionNew;