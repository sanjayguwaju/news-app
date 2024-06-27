import React from "react";

interface Article {
  imageSrc: string;
  title: string;
  description?: string;
  link?: string;
}

const Latest: React.FC = () => {
  const categories = [
    { name: "प्रदेश", isActive: false },
    { name: "कोशी", isActive: false },
    { name: "मधेश", isActive: true },
    { name: "वागमती", isActive: false },
    { name: "गण्डकी", isActive: false },
    { name: "प्रदेश ५", isActive: false },
    { name: "लुम्बिनी", isActive: false },
    { name: "सुदूरपश्चिम", isActive: false },
    { name: "विचार", isActive: false },
  ];

  const mainArticle: Article = {
    imageSrc: "https://placehold.co/600x400",
    title: "टी-२० अन्तर्राष्ट्रियमा सन्दीपको एक सयौं विकेट पूरा",
    description:
      "काठमाडौं,०४ असार । नेपालका लेगस्पिनर सन्दीप लामिछाने टी२० आईमा १ सय विकेट पूरा गर्ने पहिलो...",
    link: "#",
  };

  const sideArticles: Article[] = [
    {
      imageSrc: "https://placehold.co/100x100",
      title: "कबाड व्यवसायीले गरे काठमाडौंमा प्रदर्शन",
    },
    {
      imageSrc: "https://placehold.co/100x100",
      title: "धनुषामा एक सातादेखि बेपत्ता महिलाको हत्या भएको खुलासा",
    },
    {
      imageSrc: "https://placehold.co/100x100",
      title: "टी-२० विश्वकपमा भोलि नेपाल बंगलादेशसँग खेल्ने",
    },
    {
      imageSrc: "https://placehold.co/100x100",
      title: "मधेश प्रदेशको बजेट ४३ अर्ब ९ करोड २९ लाखको सार्वजनिक",
    },
  ];

  const opinionArticles: Article[] = [
    {
      imageSrc: "https://placehold.co/100x100",
      title: "मधेश प्रदेशको बजेट ४३ अर्ब ९ करोड २९ लाखको सार्वजनिक",
    },
    {
      imageSrc: "https://placehold.co/100x100",
      title:
        "जनता समाजवादी पार्टी (जसपा) नेपालको केन्द्रीय अध्यक्ष उपेन्द्र यादव निर्विरोध निर्वाचित",
    },
    {
      imageSrc: "https://placehold.co/100x100",
      title:
        "फुटबलविजयपुरुषमा आजको ठूलो जित निरन्तर वाणिज्यिक बिजुलीको सेवा बुझाउने",
    },
    {
      imageSrc: "https://placehold.co/100x100",
      title: "मौलापुरमा “फ्री बिजुली, फ्री पानी” कार्यक्रम प्रभावकारी बन्दै",
    },
  ];

  return (
    <div className="max-w-full mx-auto p-4 lg:max-w-7xl">
      <div className="bg-white p-4">
        <div className="flex flex-wrap space-x-2 border-b-2 border-red-600 pb-2 mb-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`px-4 py-2 rounded-t-lg ${
                category.isActive ? "bg-blue-900" : "bg-red-600"
              } text-white mb-2`}
            >
              {category.name}
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1 mb-4 md:mb-0">
            <img
              src={mainArticle.imageSrc}
              alt="Main Article Image"
              className="w-full h-auto mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{mainArticle.title}</h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              {mainArticle.description}
            </p>
            <a
              href={mainArticle.link}
              className="text-blue-600 dark:text-blue-400"
            >
              थप पढ्नुहोस्
            </a>
          </div>

          <div className="flex-1">
            <div className="space-y-4">
              {sideArticles.map((article, index) => (
                <div className="flex space-x-4" key={index}>
                  <img
                    src={article.imageSrc}
                    alt="Article Image"
                    className="w-24 h-24 object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-black text-justify my-2 text-xl">{article.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="space-y-4">
              {opinionArticles.map((article, index) => (
                <div className="flex space-x-4" key={index}>
                  <img
                    src={article.imageSrc}
                    alt="Opinion Image"
                    className="w-24 h-24 object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-black text-justify my-2 text-xl">{article.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
