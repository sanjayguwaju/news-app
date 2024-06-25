import React from "react";

const mainNews = {
  title: "पत्रकार महासंघको निर्वाचन असार २२ गते",
  imgSrc:
    "https://res.cloudinary.com/dz3facqgc/image/upload/v1719322207/tqaltpcfdsdkk697jeij.png",
  imgAlt: "Main News Image",
  description: `काठमाडौं,०८ असार । नेपाल पत्रकार महासंघको निर्वाचन कार्यतालिका सार्वजनिक भएको छ ।
                सार्वजनिक निर्वाचन कार्यतालिका अनुसार असार २३ गते बिहान १० बजेदेखि अपरान्ह ४ बजेसम्म 
                उम्मेदवारको मनोनयन दर्ता गर्ने कार्यतालिका रहेको छ । त्यस्तै असार २२ गते बिहान ९ बजेदेखि 
                साँझ ६ बजेसम्म मतदान हुनेछ भने मतदान सकिए लगत्तै मतगणना कार्य सुरु हुने निर्वाचन समितिले ...`,
  readMoreLink: "#",
};

const sidebarNews = [
  {
    imgSrc: "https://placehold.co/100x100",
    imgAlt: "News Image 1",
    description: "२७० केजी गाँजा सहित भारतीय ट्रक र चालक पक्राउ",
  },
  {
    imgSrc: "https://placehold.co/100x100",
    imgAlt: "News Image 2",
    description: "रोहित पौडेललाई हात लगाउने बंगालदेशी बलरमाथि आईसीसीको कारवाही",
  },
  {
    imgSrc: "https://placehold.co/100x100",
    imgAlt: "News Image 3",
    description: "सहकारीको रकम लुटपाट गर्न भारतीय नागरिक रोहतहाबाट पक्राउ",
  },
  {
    imgSrc: "https://placehold.co/100x100",
    imgAlt: "News Image 4",
    description:
      "नक्कली लाइसेन्स वितरण कार्यमा संलग्न अभियोगमा.पाँच जनालाई पक्राउ",
  },
  {
    imgSrc: "https://placehold.co/100x100",
    imgAlt: "News Image 5",
    description: "६ किलो सुन र ४८ लाख नगदसहित एक व्यक्ति पक्राउ",
  },
];

const SocietyBlock = () => {
  return (
    <div className="max-w-full mx-auto p-4 lg:max-w-7xl">
      <div className="bg-red-600 text-white p-2">
        <h2 className="font-bold text-2xl sm:text-xl">समाज</h2>
      </div>
      <div>
        <p className="text-black text-left my-2 text-2xl sm:text-base">{mainNews.title}</p>
      </div>
      <div className="flex flex-wrap gap-4 md:flex-nowrap">
        <div className="w-full md:w-2/3">
          <img
            src={mainNews.imgSrc}
            alt={mainNews.imgAlt}
            className="w-full mb-4"
          />
          <p className="text-black text-justify my-2 text-xl sm:text-base">
            {mainNews.description}
            <a href={mainNews.readMoreLink} className="text-blue-600">
              थप पढ्नुहोस्
            </a>
          </p>
        </div>
        {/* <hr className="hidden lg:block h-[3px] bg-red-700 my-2 w-full dark:bg-gray-700"></hr> */}
        <div className="flex flex-col gap-4 w-[400px] md:w-[340px]">
          <div className="space-y-4">
            {sidebarNews.map((news, index) => (
                <div key={index} className="flex items-start space-x-2 w-full">
                <img
                  src={news?.imgSrc}
                  alt={news?.imgAlt}
                  className="w-20 h-20 object-cover"
                />
                <p className="text-black text-justify my-2 text-xl sm:text-base">{news?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocietyBlock;
