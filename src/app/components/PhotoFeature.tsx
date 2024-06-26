import * as React from "react";

type ImageProps = {
  src: string;
  alt?: string;
  className?: string;
};

const Image: React.FC<ImageProps> = ({ src, alt = "", className }) => (
  <img src={src} alt={alt} className={className} loading="lazy" />
);

const newsItems = [
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e154311572ff842bc565c3ba6621e5067927cb1ab5b1015c8247c60da6662887?apiKey=364294d949e44cc6a45273c421c40ca2&",
    text: "संचालनको पहिलो तीन महिनामै इन्दिरा आईभीएफ, नेपालको सफलता दर ९५% ",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/22282dbef473bc21b6592e7d5a5555ca208115ab2f5ec51a13046696cb25b4fc?apiKey=364294d949e44cc6a45273c421c40ca2&",
    text: "आज विश्व वातावरण दिवस,जनकपुरधाममा मौन प्रदर्शन (फोटो फिचर) ",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/726d1ef2fa4f49c00ae24f7855c55ebb63b2b8bf01c4c38df701259b38bd0b55?apiKey=364294d949e44cc6a45273c421c40ca2&",
    text: "यौनिक तथा लैङ्गिक अल्पसङ्ख्यकबारे फोटो प्रदर्शनी ",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/59a5817b3a3b82013be80c1a27fb8927bb047ee29e53dc63f93a643fe875b866?apiKey=364294d949e44cc6a45273c421c40ca2&",
    text: "बिहारका मुख्यमन्त्रीले भने–एक दार्शनिक समाजवादी थिए प्रदिप गिरि ",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0386f55698e09d0411c8333cdbdf6d321b474801dcbd74c24ef55a392c406801?apiKey=364294d949e44cc6a45273c421c40ca2&",
    text: "बिहारका मुख्यमन्त्रीले भने–एक दार्शनिक समाजवादी थिए प्रदिप गिरि ",
  },
];

export const PhotoFeature = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full text-white bg-black bg-opacity-80 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-[1130px] max-w-full">
          <h2 className="self-center px-16 py-0.5 text-3xl font-bold border-b border-solid border-stone-300 max-md:px-5 max-md:max-w-full">
          फोटो फिचर
          </h2>
          <div className="flex gap-5 items-start mt-9 mb-9 text-xl font-semibold leading-7 max-md:flex-wrap">
            {newsItems.map((item, index) => (
              <div className="flex-1 flex flex-col" key={index}>
                <Image
                  src={item.imgSrc}
                  className="self-center aspect-[1.01] w-[202px]"
                />
                <p className="mt-5">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
