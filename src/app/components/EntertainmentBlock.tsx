import React from "react";

const newsData = [
  {
    imgSrc: "https://placehold.co/300x400",
    imgAlt: "Main News",
    description: "केटाहरू जिस्क्याउने १५ महिला पक्राउ",
  },
  {
    imgSrc: "https://placehold.co/100x100",
    imgAlt: "News 1",
    description:
      "‘पूजारा साकी’ र ‘फर्की फर्की’ चलेपछि वर्ष भन्छिन्, ‘मेरो फिल्म चलेजसरी पुलकित छु’",
  },
  {
    imgSrc: "https://placehold.co/100x100",
    imgAlt: "News 2",
    description: "‘बिग बस’ र ‘स्वर्ग’ चल्दै, अब आउँदैछ ‘बिग बस २’",
  },
  {
    imgSrc: "https://placehold.co/100x100",
    imgAlt: "News 3",
    description: "‘दार्जिलिङ’ र ‘दार्जिलिङ २’ चल्दै, अब आउँदैछ ‘दार्जिलिङ ३’",
  },
  {
    imgSrc: "https://placehold.co/100x100",
    imgAlt: "News 4",
    description:
      "‘बज्रगी भाईजस्तो’ र ‘कालो निर्माण’ चल्दै, अब आउँदैछ ‘बज्रगी भाईजस्तो २’",
  },
  {
    imgSrc: "https://placehold.co/100x100",
    imgAlt: "News 5",
    description: "‘बिराना’ र ‘बिराना २’ चल्दै, अब आउँदैछ ‘बिराना ३’",
  },
];

const EntertainmentBlock = () => {
  const mainNews = newsData[0];
  const otherNews = newsData.slice(1);

  return (
    <div className="max-w-full mx-auto p-4 lg:w-[1130px]">
      <div className="bg-red-600 text-white p-2 mb-4">
        <h2 className="text-xl font-bold">मनोरञ्जन</h2>
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src={mainNews.imgSrc}
            alt={mainNews.imgAlt}
            className="w-full mb-2"
          />
          <p className="text-lg font-semibold">{mainNews.description}</p>
        </div>
        <div className="flex flex-col gap-4 w-[300px]">
          {otherNews.map((news, index) => (
            <div key={index} className="flex items-start space-x-2 w-full">
              <img
                src={news.imgSrc}
                alt={news.imgAlt}
                className="w-20 h-20 object-cover"
              />
              <p>{news.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 w-[300px]">
          {otherNews.map((news, index) => (
            <div key={index} className="flex items-start space-x-2 w-full">
              <img
                src={news.imgSrc}
                alt={news.imgAlt}
                className="w-20 h-20 object-cover"
              />
              <p>{news.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EntertainmentBlock;
