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

const PhotoFeature: React.FC = () => (
  <div className="flex flex-col justify-center items-center px-16 py-8 mt-9 w-full text-white bg-black bg-opacity-80 max-md:px-5 max-md:max-w-full">
    <div className="flex flex-col w-[1130px] max-w-full">
      <h2 className="self-center px-16 py-0.5 text-3xl font-bold border-b border-solid border-stone-300 max-md:px-5 max-md:max-w-full">
        ोटो फिचर
      </h2>
      <div className="flex gap-5 items-start mt-9 text-xl font-semibold leading-7 max-md:flex-wrap">
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
      <div className="shrink-0 self-center mt-10 w-5 bg-sky-700 rounded-xl h-[7px] max-md:mt-10" />
    </div>
  </div>
);

type ColumnProps = {
  children: React.ReactNode;
};

const Column: React.FC<ColumnProps> = ({ children }) => (
  <div className="flex flex-col w-[32%] px-4 pb-8 mx-auto text-lg font-medium bg-neutral-100 max-md:mt-4 max-md:w-full max-md:max-w-full">
    {children}
  </div>
);

const Nav = () => {
  return (
    <>
      <nav className="flex justify-center items-center self-stretch px-16 mt-6 w-full text-lg leading-6 text-white whitespace-nowrap bg-red-600 shadow-sm max-md:px-5 max-md:max-w-full">
        <div className="flex gap-0 justify-center pr-20 pl-10 max-w-full bg-red-600 w-[1130px] max-md:flex-wrap max-md:px-5">
          <HeaderNavItem label="समाचार" />
          <HeaderNavItem label="समाज" />
          <HeaderNavItem label="ािजनीत" />
          <HeaderNavItem label="रदेश" />
          <HeaderNavItem label="ाष्ट्रिय" />
          <HeaderNavItem label="िचार" />
          <HeaderNavItem label="मनोरञ्जन" />
          <HeaderNavItem label="ेलकुद" />
          <HeaderNavItem label="अन" />
        </div>
      </nav>
    </>
  );
};

export default Nav;
