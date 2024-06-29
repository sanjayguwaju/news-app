import React from "react";

const politicsNewsData = [
  {
    imgSrc:
      "https://res.cloudinary.com/dz3facqgc/image/upload/v1719322207/tqaltpcfdsdkk697jeij.png",
    imgAlt: "News Image 1",
    description: "मोटरसाइकल दुर्घटना हुँदा चालकको मृत्यु",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dz3facqgc/image/upload/v1719322351/rtbg2fnt9nehibjuarhx.jpg",
    imgAlt: "News Image 2",
    description: "पत्रकार महासंघको निर्वाचन असार २२ गते",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dz3facqgc/image/upload/v1719322452/eorforz28idaazh29xlq.gif",
    imgAlt: "News Image 3",
    description:
      "जनकपुरधाममा यौनिक तथा लैङ्गिक अल्पसंख्यकले मनाए ‘प्राइड मन्थ’",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dz3facqgc/image/upload/v1719322616/asjpx4sfyzcjunqxsbce.png",
    imgAlt: "News Image 4",
    description: "यो हप्ताभित्र एसईईको नतिजा प्रकाशनको तयारी",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dz3facqgc/image/upload/v1719322736/jsqclvbmi1lz42evdqas.jpg",
    imgAlt: "News Image 5",
    description:
      "संचालनको पहिलो तीन महिनामै इन्दिरा आईभीएफ, नेपालको सफलता दर ९५%",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dz3facqgc/image/upload/v1719322837/ar8z0mociwdumsq585ol.jpg",
    imgAlt: "News Image 6",
    description: "जनकपुरधाममा यौनिक तथा लैंगिक अल्पसंख्यकले मनाए ‘प्राइड मन्थ’",
  },
];

const PoliticsBlock = () => {
  return (
    <section className="flex justify-center items-center w-full sm:px-6 md:px-8 lg:px-16">
      <div className="flex flex-col w-full max-w-7xl p-4">
        <div className="bg-red-600 text-white px-4 py-2">
          <h2 className="font-bold text-2xl sm:text-xl">राजनीति</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
          {politicsNewsData.map((news, index) => (
            <div key={index} className="overflow-hidden">
              <img
                src={news.imgSrc}
                alt={news.imgAlt}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <p className="text-black text-center  text-2xl sm:text-base">
                  {news.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoliticsBlock;
