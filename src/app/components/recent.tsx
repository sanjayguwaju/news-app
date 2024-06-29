import * as React from "react";

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

const Recent = () => {
  return (
    <>
      <section className="flex justify-center items-center self-stretch px-16 pt-8 pb-16 mt-6 w-full bg-neutral-200 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[1130px]">
          <h2 className="pb-3 text-3xl font-bold leading-9 whitespace-nowrap border-b border-solid border-stone-300 text-zinc-900 max-md:max-w-full">
            भर्खर
          </h2>
          <div className="mt-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3498833eb12bc32d3cc63d455901796a387065d1c037f6265af22685fbb79ed9?apiKey=364294d949e44cc6a45273c421c40ca2&"
                  className="grow w-full aspect-[1.25] max-md:mt-4 max-md:max-w-full"
                  alt="Recent news"
                />
              </div>
              <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
                <article className="flex flex-col self-stretch my-auto max-md:mt-8 max-md:max-w-full">
                  <h3 className="text-5xl font-semibold text-black leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
                    मालवाहक रेल र यात्रु बाहक रेल
                    <br />
                    आपसमा ठोक्किँदा कम्तीमा १३ जनाक
                    <br />
                    मृत्यु
                  </h3>
                  <hr className="shrink-0 mt-4 border-b border-solid border-stone-300 max-md:max-w-full" />
                  <div className="flex gap-3.5 items-center self-start mt-5">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0f654b38d7a47b0c735ba6cedd01d17c49b8ebad51dc62d9c0bea287ed4ae5b?apiKey=364294d949e44cc6a45273c421c40ca2&"
                      className="shrink-0 self-stretch aspect-square w-[25px]"
                      alt="Author"
                    />
                    <p className="self-stretch my-auto text-xs leading-8 text-zinc-700">
                      Sanoj Yadav
                    </p>
                    <p className="flex-auto">२०८१ असार ४, सोमबार १६:५७</p>
                  </div>
                  <hr className="shrink-0 mt-3 border-b border-solid border-stone-300 max-md:max-w-full" />
                  <p className="mt-2.5 text-lg leading-6 text-black max-md:max-w-full">
                    असार ०३, जनकपुर । भारतमा रेल आपसमा ठोक्किँदा कम्तीमा पाँच
                    जनाको मृत्यु हुनुका साथै २५ जनाभन्दा बढ
                  </p>
                  <div className="flex gap-1 text-lg leading-6 max-md:flex-wrap">
                    <p className="flex-auto text-black max-md:max-w-full">
                      घाइते भएका छन । भारतको पूर्वी राज्य पश्चिम बङ्गालमा सोमबार
                      मालवाहक...
                    </p>
                    <p className="flex-auto text-sky-700">थप पढ्नुहोस्</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-full w-[1130px] py-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <img
                  src="https://placehold.co/300x200"
                  alt="News Image 1"
                  className="w-full h-48 object-cover  mb-4"
                />
                <p className="text-zinc-8">
                  पत्रकार महासंघको निर्वाचन असार २२ गते
                </p>
              </div>
              <div>
                <img
                  src="https://placehold.co/300x200"
                  alt="News Image 2"
                  className="w-full h-48 object-cover  mb-4"
                />
                <p className="text-zinc-800">
                  जनकपुरधाममा यौनिक तथा लैंगिक अल्पसंख्यकले मनाए ‘प्राइड मर्च’
                </p>
              </div>
              <div>
                <img
                  src="https://placehold.co/300x200"
                  alt="News Image 3"
                  className="w-full h-48 object-cover  mb-4"
                />
                <p className="text-zinc-800">
                  २७० केजी गाँजा सहित भारतीय ट्रक र चालक पक्राउ
                </p>
              </div>
              <div>
                <img
                  src="https://placehold.co/300x200"
                  alt="News Image 4"
                  className="w-full h-48 object-cover  mb-4"
                />
                <p className="text-zinc-800">
                  सलाहीमा कान्छी पत्नीसँग मिलेर जेठी श्रीमतीको हत्या, श्रीमान र
                  कान्छी पत्नी पक्राउ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recent;
