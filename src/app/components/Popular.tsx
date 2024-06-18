import React from "react";

interface Article {
  imageSrc: string;
  title: string;
}

const Popular: React.FC = () => {
  const mainArticle = {
    imageSrc: "https://res.cloudinary.com/dz3facqgc/image/upload/v1718634303/gzlpfs5ati2dobcwajbt.jpg",
    title: "टी-२० अन्तर्राष्ट्रियमा सन्दीपको एक सयौं विकेट पूरा",
    authorImageSrc: "https://placehold.co/40x40",
    authorName: "पंकज कुमार",
    date: "२०८४ असार ४, सोमबार ०८:१२",
    description:
      "काठमाडौं,४ असार । नेपालको लेगस्पिनर सन्दीप लामिछाने टी२० आईमा १ सय विकेट पूरा गर्ने पहिलो खेलाडी बनेका छन् । आईसीसी टी२० विश्वकप २०२४ मा बंगलादेशविरुद्ध दुई विकेट लिँदै...",
    link: "#",
  };

  const articles: Article[] = [
    {
      imageSrc: "https://placehold.co/300x200",
      title: "कबाड व्यवसायीले गरे काठमाडौंमा प्रदर्शन",
    },
    {
      imageSrc: "https://placehold.co/300x200",
      title:
        "धनुषामा एक सातादेखि बेपत्ता श्रीमतीको आफ्नै श्रीमान्ले हत्या गरेको खुलासा",
    },
    {
      imageSrc: "https://placehold.co/300x200",
      title: "टी-२० विश्वकपमा भोलि नेपाल बंगलादेशसँग खेल्दै",
    },
    {
      imageSrc: "https://placehold.co/300x200",
      title: "मधेस प्रदेशको बजेट ४३ अर्ब ९ करोड २९ लाखको सार्वजनिक",
    },
  ];

  return (
    <>
      <div className="bg-white p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/2">
              <img
                src={mainArticle.imageSrc}
                alt="Main article image"
                className="rounded-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-3xl font-bold mb-2">{mainArticle.title}</h1>
              <div className="flex items-center mb-4">
                <img
                  src={mainArticle.authorImageSrc}
                  alt="Author image"
                  className="rounded-full w-10 h-10 mr-2"
                />
                <div>
                  <p className="text-sm font-semibold">
                    {mainArticle.authorName}
                  </p>
                  <p className="text-xs text-zinc-500">{mainArticle.date}</p>
                </div>
              </div>
              <p className="text-zinc-700 mb-4">{mainArticle.description}</p>
              <a href={mainArticle.link} className="text-blue-600">
                थप पढ्नुहोस्
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {articles.map((article, index) => (
              <div key={index}>
                <img
                  src={article.imageSrc}
                  alt={`Article image ${index + 1}`}
                  className="rounded-lg w-full"
                />
                <p className="mt-2 text-zinc-800">{article.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
