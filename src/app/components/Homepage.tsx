import * as React from "react";
import Recent from "./Recent";
import { PhotoFeature } from "./PhotoFeature";
import SocietyBlock from "./SocietyBlock";
import PoliticsBlock from "./PoliticsBlock";
import EntertainmentBlock from "./EntertainmentBlock";

type ImageProps = {
  src: string;
  alt?: string;
  className?: string;
};

const Image: React.FC<ImageProps> = ({ src, alt = "", className }) => (
  <img src={src} alt={alt} className={className} loading="lazy" />
);

type HeaderNavItemProps = {
  label: string;
};

const HeaderNavItem: React.FC<HeaderNavItemProps> = ({ label }) => (
  <div className="justify-center p-4 border-r border-solid border-blue-800 border-opacity-30">
    {label}
  </div>
);

const newsItems = [
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e154311572ff842bc565c3ba6621e5067927cb1ab5b1015c8247c60da6662887?apiKey=364294d949e44cc6a45273c421c40ca2&",
    text: "ौनिक तथा लैङ्गिक अल्पसङ्ख्यकबारे फोट रदर्शन",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/22282dbef473bc21b6592e7d5a5555ca208115ab2f5ec51a13046696cb25b4fc?apiKey=364294d949e44cc6a45273c421c40ca2&",
    text: "आज विश्व वातावरण िवस,जनकपुरधाममा मौन रदर्शन (फोटो फिचर)",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/726d1ef2fa4f49c00ae24f7855c55ebb63b2b8bf01c4c38df701259b38bd0b55?apiKey=364294d949e44cc6a45273c421c40ca2&",
    text: "िरिको निधनमा भदौ १६ सम्मका सबै कार्यक्रम थगित,पार्टीको आधा झन ुकाईन",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/59a5817b3a3b82013be80c1a27fb8927bb047ee29e53dc63f93a643fe875b866?apiKey=364294d949e44cc6a45273c421c40ca2&",
    text: "िहारका मुख्यमन्त्रीले भने– एक दार्शनिक समाजवाद िए प्रदिप गिर",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0386f55698e09d0411c8333cdbdf6d321b474801dcbd74c24ef55a392c406801?apiKey=364294d949e44cc6a45273c421c40ca2&",
    text: "ंग्रेस नेता प्रदीप गिरीक िधन,संस्कार आजैै गरिन",
  },
];

type ColumnProps = {
  children: React.ReactNode;
};

const Column: React.FC<ColumnProps> = ({ children }) => (
  <div className="flex flex-col w-[32%] px-4  mx-auto text-lg font-medium bg-neutral-100 pb-8 max-md:mt-4 max-md:w-full max-md:max-w-full">
    {children}
  </div>
);

const Homepage: React.FC = () => (
  <>
    <Recent />
    <SocietyBlock />
    <PoliticsBlock />
    <EntertainmentBlock />
    <PhotoFeature />
  </>
);

export default Homepage;
