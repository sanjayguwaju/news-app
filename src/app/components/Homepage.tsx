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

const Homepage: React.FC = () => (
  <div className="flex flex-col pt-6 bg-white">
    <main className="flex flex-col items-center">
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/135c8651cb6c8f0abc072fb5db42e98e0922d02bf57d3e612c2de7d49d8caac4?apiKey=364294d949e44cc6a45273c421c40ca2&"
        className="mt-8 max-w-full aspect-[8.33] w-[1130px]"
        alt="Main banner"
      />
      <section className="flex flex-col items-center mt-11 max-md:mt-10 max-md:max-w-full">
        <h1 className="text-6xl font-semibold tracking-tighter text-center text-black leading-[96px] max-md:text-4xl">
          ६ किलो सुन र ४८ लाख नगदसहित एक व्यक्ति पक्राउ
        </h1>
        <div className="flex gap-4 mt-5 text-xs leading-6 text-center text-black">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/785f9178055e76137606eaeaf6c38134277919243331918c24b50cc5943249f0?apiKey=364294d949e44cc6a45273c421c40ca2&"
            className="shrink-0 aspect-square w-[25px]"
            alt="Author"
          />
          <p className="my-auto text-xs leading-8 text-zinc-700">ंकज कुमार</p>
          <div className="flex gap-2 self-start">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/71ce744efe1549f46b172145965010de253751f6cc161a340c382293e0379142?apiKey=364294d949e44cc6a45273c421c40ca2&"
              className="shrink-0 aspect-[0.87] w-[13px]"
              alt="Clock"
            />
            <p className="flex-auto">२०८१ असार ४, सोमबार १५:३०</p>
          </div>
          <div className="flex gap-2 self-start font-bold whitespace-nowrap">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/10ca010478e79582dc0631309f8ac4f90e702d91bd38e6f1513ee987205a6309?apiKey=364294d949e44cc6a45273c421c40ca2&"
              className="shrink-0 w-4 aspect-square"
              alt="Comments"
            />
            <p className="my-auto">0</p>
          </div>
        </div>
      </section>
      <Image
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/30e2ac63aacf89ebc4a3ce3dd358c24845a13b83fa4d8e78e4f4accc41955a9f?apiKey=364294d949e44cc6a45273c421c40ca2&"
      className="mt-5 max-w-full aspect-[1.49] w-[1100px]"
      alt="News image"
    />
    </main>
    
    <section className="flex justify-center items-center self-stretch px-16 pt-8 pb-16 mt-6 w-full bg-neutral-200 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[1130px]">
        <h2 className="pb-3 text-3xl font-bold leading-9 whitespace-nowrap border-b border-solid border-stone-300 text-zinc-900 max-md:max-w-full">
          भर्खर
        </h2>
        <div className="mt-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3498833eb12bc32d3cc63d455901796a387065d1c037f6265af22685fbb79ed9?apiKey=364294d949e44cc6a45273c421c40ca2&"
                className="grow w-full aspect-[1.25] max-md:mt-4 max-md:max-w-full"
                alt="Recent news"
              />
            </div>
            <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
              <article className="flex flex-col self-stretch my-auto max-md:mt-8 max-md:max-w-full">
                <h3 className="text-5xl font-semibold text-black leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
                  ालवाहक रेल र यात्रु बाहक रेल
                  <br />
                  आपसमा ठोक्किँदा कम्तीमा १३ जनाक
                  <br />
                  ृत
                </h3>
                <hr className="shrink-0 mt-4 border-b border-solid border-stone-300 max-md:max-w-full" />
                <div className="flex gap-3.5 items-center self-start mt-5">
                  <Image
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
                    ाइते भएका छन । भारतको पूर्वी राज्य पश्चिम बङ्गालमा सोमबार
                    मालवाहक...
                  </p>
                  <p className="flex-auto text-sky-700">थप पढ्नुहोस</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
    <PhotoFeature />
    <div className="flex flex-col mt-5 w-full max-md:max-w-full">
      <footer className="flex justify-center items-center px-16 py-7 w-full text-3xl font-bold leading-6 text-white bg-neutral-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-[1130px] max-w-full">
          <p className="self-center">News Aone YouTube</p>
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4117fb84-22ee-47d7-9e38-ec1806c94a93?apiKey=364294d949e44cc6a45273c421c40ca2&"
            className="mt-3 w-full border-2 border-white border-solid aspect-[2.5] max-md:max-w-full"
            alt="YouTube thumbnail"
          />
        </div>
      </footer>
      <div className="flex flex-col items-start px-16 pt-16 pb-11 mt-8 w-full bg-slate-800 max-md:px-5 max-md:max-w-full">
        <section className="ml-80 w-[550px] max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <Column>
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c073df08b0f597a2a1a62412469caa44d0028f8b2b686b62bde16801ad94d037?apiKey=364294d949e44cc6a45273c421c40ca2&"
                className="self-center aspect-[5.88] w-[260px]"
                alt="SG Media Group"
              />
              <p className="mt-6">
                एस. जि. मिडिया ग्रुप प्रा. लि द्वारा संचालित
                <br />
                ुज ए-वन डटकम अनलाइन
                <br />
                महाराजगंज, काठमाडौँ, नेपाल
                <br />
                सम्पर्क नम्बर: ९८०३८३०९२२
                <br />
                इमेल: newsaone2022@gmail.com
              </p>
              <p className="mt-6">
                कम्पनी दर्ता नं.: २७५८०६/०७८०७९
                <br />
                ेस काउन्सिल दर्ता नं.: ३७३४-२०७९/८०
                <br />
                ूचना विभाग दर्ता नं. : ३७३७-२०७९/८०
                <br />
                ाजस्व विभाग दर्ता नं. : ६१०१३४६५८
              </p>
            </Column>
            <Column>
              <h3 className="pb-2 text-2xl leading-7 border-b border-solid border-stone-300">
                ाम्रो टीम:-
              </h3>
              <p className="mt-7 text-lg leading-6">
                रबन्ध निर्देशक:<span className=""> सनोज कुमार यादव</span>
                <br />
                रधान सम्पादक<span className=""> गणेश कुमार मण्डल</span>
                <br />
                ंवाददाताहरु:
                <br />
                <span className="">चन्दन रजक (सप्तरी )</span>
                <br />
                <span className="">ाजन कुमार यादव ( महोत्तरी )</span>
                <br />
                <span className="">ुमार पंकज (जनकपुरधाम)</span>
                <br />
                <span className="">अशोक कुमार महतो शुरी (धनुषा )</span>
                <br />
                <span className="">ुजा कुमारी (धनुषा )</span>
                <br />
                <span className="">िरेन्द्र कुमार यादव (सर्लाही )</span>
                <br />
                <span className="">गणेश मण्डल (काठमाडौं )</span>
                <br />
                <span className="">अशोक राउत (सर्लाही )</span>
              </p>
            </Column>
          </div>
        </section>
      </div>
      <div className="flex gap-5 justify-between items-start px-16 pb-4 w-full text-base font-semibold leading-6 text-center bg-black max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between my-auto max-md:flex-wrap max-md:max-w-full">
          <p className="grow text-gray-50 grow">
            © 2024: NewsAone मा सर्वाधिक सुरक्षित छ।
            <span className="text-yellow-400">Privacy Policy</span>
            <span>|</span>
            <span className="text-yellow-400">सम्पर्क</span>
            <span>|</span>
            <span className="text-yellow-400">ाम्रो बारेम</span>
          </p>
          <p className="text-gray-50">
            Design and Developed by:
            <span className="text-yellow-400"> Protech Nepal Pvt.Ltd </span>
          </p>
        </div>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e62f3d44532b8ff170a7bd97643b2e1924f86ea89efc7fad10fb73abe671ed5?apiKey=364294d949e44cc6a45273c421c40ca2&"
          className="shrink-0 self-start mt-0 w-11 aspect-square"
          alt="Footer logo"
        />
      </div>
    </div>
  </div>
);

export default Homepage;
