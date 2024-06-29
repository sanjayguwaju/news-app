import React from "react";

const newsData = [
  {
    id: 1,
    image: "https://placehold.co/100x100",
    alt: "news-image-1",
    text: "एसईईको नतिजा सार्वजनिक - ४७.६८ प्रतिशत विद्यार्थी उत्तीर्ण, १८६ जनाले ४ जीपीए ल्याए",
  },
  {
    id: 2,
    image: "https://placehold.co/100x100",
    alt: "news-image-2",
    text: "यौनशक्ति बढाउने औषधिको सेवन गरी प्रेमिकासँग शारीरिक सम्पर्क राख्दा युवकको मृत्यु",
  },
  {
    id: 3,
    image: "https://placehold.co/100x100",
    alt: "news-image-3",
    text: "चलिरहेको टेबल पंखा शरीरमा खस्दा एक जनाको मृत्यु",
  },
  {
    id: 4,
    image: "https://placehold.co/100x100",
    alt: "news-image-4",
    text: "मधेश प्रदेशमा ४ दिने 'प्रदेश स्तरीय नमुना युवा संसद अभ्यास'को उद्घाटन",
  },
];

const FavouriteSection = () => {
  return (
    <div className="max-w-sm mx-auto bg-card text-card-foreground">
      <div className="bg-primary text-primary-foreground m-2">
        <h2 className="text-lg font-bold">ताजा समाचार</h2>
      </div>
      <div>
        {newsData.map((news) => (
          <div key={news.id}>
            <div className="flex space-x-4 mb-3">
              <img
                src={news.image}
                alt={news.alt}
                className="w-20 h-20 object-cover"
              />
              <p className="text-l text-justify">{news.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouriteSection;
