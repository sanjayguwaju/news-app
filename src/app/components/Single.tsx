import * as React from "react";

type ImageProps = { src: string; alt: string; className: string };

type SectionHeaderProps = { text: string };

const Single: React.FC = () => {
  const newsHeadlines = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6aa0850351a495523e82786b4ffe82e0d996db8f48644f58bb99c1c1bedcb393?apiKey=364294d949e44cc6a45273c421c40ca2&",
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
      <div className="box-border flex relative flex-col shrink-0 mt-5">
        <div className="flex flex-col items-center pt-6 bg-white">
          <div className="flex gap-5 justify-between max-w-full text-xs w-[1130px] max-md:flex-wrap">
            <ArticleWithHeader
              text="३ आषाढ २०८१, सोमवार"
              subText="सत्य समाचार सत्य विचार"
            >
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b5c1e622a09aa3289e1da3b858f5609c4042358fa71afde6fd8570d33b9b748?apiKey=364294d949e44cc6a45273c421c40ca2&"
                alt=""
                className="self-center aspect-[5.88] w-[260px]"
              />
            </ArticleWithHeader>
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d482abc7d50f1a5ac3d628e4fdbf87780479ff3d60256fa66f123245caf32ee?apiKey=364294d949e44cc6a45273c421c40ca2&"
              alt=""
              className="aspect-[7.14] w-[646px] max-md:max-w-full"
            />
          </div>

          <nav className="flex justify-center items-center self-stretch px-16 mt-6 w-full text-lg leading-6 text-white whitespace-nowrap bg-red-600 shadow-sm max-md:px-5 max-md:max-w-full">
            <NavigationBar />
          </nav>

          <section className="mt-8 max-w-full w-[1130px]">
            <main className="flex gap-5 max-md:flex-col max-md:gap-0">
              <LargeSection />
              <aside className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
                <Sidebar />
              </aside>
            </main>
          </section>

          <section className="mt-3 max-w-full w-[1130px]">
            <main className="flex gap-5 max-md:flex-col max-md:gap-0">
              <LargeSection />
              <aside className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
                <Sidebar />
              </aside>
            </main>
          </section>

          <CommentSection />

          <RelatedNewsSection newsHeadlines={newsHeadlines} />

          <footer className="flex flex-col items-start self-stretch px-16 pt-16 pb-11 mt-24 w-full bg-slate-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="ml-80 max-w-full w-[550px]">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <CompanyInfo />
                <Team />
              </div>
            </div>
          </footer>

          <div className="flex justify-center items-center self-stretch px-16 py-5 w-full text-base font-semibold leading-6 text-center bg-black max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between max-w-full w-[960px] max-md:flex-wrap">
              <div className="flex gap-1 text-gray-50 max-md:flex-wrap">
                <div className="grow">
                  © 2024: NewsAone मा सर्वाधिक सुरक्षित छ
                </div>
                <div className="text-yellow-400">Privacy Policy</div>
                <div>|</div>
                <div className="text-yellow-400">सम्पर्क</div>
                <div>|</div>
                <div className="text-yellow-400">हाम्रा बारेमा</div>
              </div>
              <div className="flex gap-5 self-start">
                <div className="flex-auto text-gray-50">
                  Design and Developed by:
                </div>
                <div className="flex-auto text-yellow-400">
                  Protech Nepal Pvt.Ltd
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const ArticleWithHeader: React.FC<{
  text: string;
  subText: string;
  children: React.ReactNode;
}> = ({ text, subText, children }) => (
  <article className="flex flex-col self-start mt-5">
    {children}
    <div className="flex gap-3 px-5 mt-1.5">
      <div className="grow text-zinc-800">{text}</div>
      <div className="flex-auto text-black leading-[200%]">{subText}</div>
    </div>
  </article>
);

const NavigationBar: React.FC = () => (
  <div className="flex gap-0 justify-center pr-20 pl-10 max-w-full bg-red-600 w-[1130px] max-md:flex-wrap max-md:px-5">
    <Image
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/17cfa086c23e349d5ad8911af71f05837c6a5b683f5684748b94976e656861e3?apiKey=364294d949e44cc6a45273c421c40ca2&"
      alt=""
      className="shrink-0 border-r border-solid aspect-[1.14] border-blue-800 border-opacity-30 w-[52px]"
    />
    <NavItem text="समाचार" />
    <NavItem text="समाज" />
    <NavItem text="राजनीत" />
    <NavItem text="प्रदेश" />
    <NavItem text="राष्ट्रिय" />
    <NavItem text="विचार" />
    <NavItem text="मनोरञ्जन" />
    <NavItem text="खेलकुद" />
    <NavItem text="अन्य" />
  </div>
);

const NavItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="justify-center p-4 border-r border-solid border-blue-800 border-opacity-30">
    {text}
  </div>
);

const LargeSection: React.FC = () => (
  <section className="flex flex-col w-[77%] max-md:ml-0 max-md:w-full">
    <ArticleWithHeader
      text="उद्धारका लागि ४५१ टोली परिचालन"
      subText="असार ०३, जनकपुर ।"
    >
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/11f5c8dcd613bd9fde7d21d14e9cef83e48cc15809bd4ad760b26e8ef19377cb?apiKey=364294d949e44cc6a45273c421c40ca2&"
        alt=""
        className="w-full aspect-[7.69] max-md:max-w-full"
      />
    </ArticleWithHeader>
  </section>
);

const CommentSection: React.FC = () => (
  <section className="flex flex-col justify-center items-start mt-14 max-w-full text-2xl font-semibold leading-6 text-white bg-red-600 w-[840px] max-md:pr-5 max-md:mt-10">
    <HeaderWithText text="तपाईको प्रतिक्रिया !" />
    <div className="flex gap-5 justify-between items-start px-5 pt-2.5 pb-8 mt-5 max-w-full border-b border-gray-200 border-solid w-[824px] max-md:flex-wrap">
      <div className="text-sm font-semibold leading-6 text-zinc-900">
        0 comments
      </div>
      <div className="flex gap-px text-neutral-600">
        <div className="grow my-auto text-sm leading-6">Sort by</div>
        <div className="flex gap-1 justify-center px-2.5 py-2 text-xs font-bold leading-5 text-center whitespace-nowrap rounded-sm border border-solid bg-neutral-100 border-neutral-300">
          <div className="grow">Oldest</div>
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8357f3c3ce0b68381f99a2a7ea50a1549ab4acaa3721ca66369a66d9855e41e?apiKey=364294d949e44cc6a45273c421c40ca2&"
            alt=""
            className="shrink-0 self-start w-1.5 aspect-[0.55]"
          />
        </div>
      </div>
    </div>
    <div className="flex gap-2 mt-6 max-w-full text-sm leading-5 text-zinc-900 w-[824px] max-md:flex-wrap">
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4f550db6e5fccefdf4161c5520a3793d976e76482f4ba0bfa4eede9177635d6?apiKey=364294d949e44cc6a45273c421c40ca2&"
        alt=""
        className="flex overflow-hidden relative flex-col justify-center self-start px-5 py-5 aspect-square"
      />
      <div className="shrink-0 max-w-full bg-white border border-gray-300 border-solid h-[62px] w-[768px]" />
    </div>
    <div className="flex gap-1.5 justify-center px-5 py-2.5 mt-6 max-w-full text-xs leading-4 text-indigo-800 border-t border-gray-200 border-solid w-[824px] max-md:flex-wrap">
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb5a4c82e6422d02339d0496d78ec42a140a4cd5951bdd2d46e87ebf6c770689?apiKey=364294d949e44cc6a45273c421c40ca2&"
        alt="Facebook Comments Plugin"
        className="shrink-0 w-3.5 aspect-square"
      />
      <div className="flex-auto max-md:max-w-full">
        Facebook Comments Plugin
      </div>
    </div>
  </section>
);

const Sidebar: React.FC = () => (
  <aside className="flex flex-col grow mt-36 text-lg font-medium leading-6 text-black max-md:mt-10">
    <Image
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1548b4265a74defaaa578fc5588814e8255866c78ecd9788455a99f0b2999976?apiKey=364294d949e44cc6a45273c421c40ca2&"
      alt=""
      className="w-full aspect-[0.87]"
    />
    <Image
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/42dae681f9fbcc762700603acd450124f5a072ef2170056cf9d3ba0f6c985222?apiKey=364294d949e44cc6a45273c421c40ca2&"
      alt=""
      className="mt-4 w-full aspect-square"
    />
    <HeaderWithText text="राजा समाचार" />
    <HeaderWithText text="कालवाहक रेल र यात" />
    <HeaderWithText text="६ किलो सुन र ४८ लाख नगदसहित एक व्यक्ति पक्राउ" />
    <HeaderWithText text="मेयर बालेन ब्राजिल प्रस्थान" />
    <HeaderWithText text="मोटरसाइकलको ठक्करबाट पैदलयात्रुको मृत्यु" />
  </aside>
);

const HeaderWithText: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex flex-col justify-center items-start">
    <div className="flex flex-col justify-center px-1 border-r-4 border-white border-solid">
      <div className="justify-center px-7 py-3 bg-slate-900 max-md:px-5">
        {text}
      </div>
    </div>
  </div>
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

const CompanyInfo: React.FC = () => (
  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col text-lg leading-6 text-white max-md:mt-8">
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/59ac4d162697f43e8bc0c47df0a23bf14e25b968791e11bc849492fb0d8a38b7?apiKey=364294d949e44cc6a45273c421c40ca2&"
        alt=""
        className="self-center aspect-[6.25] w-[260px]"
      />
      <div className="mt-6">
        एस. जि. मिडिया ग्रुप प्रा. लि द्वारा संचालित <br /> News A-1 डटकम अनलाइन{" "}
        <br /> Maharajganj, Kathmandu, Nepal
        <br /> Contact Number: ९८०३८३०९२२ <br /> Email: newsaone2022@gmail.com
      </div>
      <div className="mt-5">
        Company Registration No.: २७५८०६/०७८०७९ <br /> Press Council
        Registration No.: ३७३४-२०७९/८० <br /> सूचना विभाग Registration No.:
        ३७३७-२०७९/८० <br /> रेजस्टिक्स Department Registration No.: ६१०१३४६५८
      </div>
    </div>
  </div>
);

const Team: React.FC = () => (
  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow font-bold text-white max-md:mt-8">
      <div className="pb-2 text-2xl leading-7 border-b border-solid border-stone-300">
        हाम्रो टीम:
      </div>
      <div className="mt-7 text-lg leading-6">
        Managing Director: <span> सनोज कुमार यादव </span> <br /> प्रधान सम्पादक{" "}
        <span> गणेश कुमार मण्डल </span> <br />
        Correspondents: <br /> <span>चन्दन रजक (Saptari)</span> <br />{" "}
        <span>राजन कुमार यादव (Mahottari)</span> <br />
        <span>कुमार पंकज (JanakpurDham)</span> <br />{" "}
        <span>अशोक कुमार महतो शुरी (Dhanusha)</span> <br />
        <span>पूजा कुमारी (Dhanusha)</span> <br />{" "}
        <span>बिरेन्द्र कुमार यादव (Sarlahi)</span> <br />
        <span>गणेश मण्डल (Kathmandu)</span> <br />{" "}
        <span>अशोक राउत (Sarlahi)</span>
      </div>
    </div>
  </div>
);

export default Single;
