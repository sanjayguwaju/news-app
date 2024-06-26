import React from "react";

interface Article {
  imageSrc: string;
  title: string;
  description?: string;
  link?: string;
}

const Latest: React.FC = () => {
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
    <div className="bg-white p-4">
      <div className="flex space-x-2 border-b-2 border-red-600 pb-2 mb-4">
        <div className="px-4 py-2 bg-blue-900 text-white rounded-t-lg">
          प्रदेश
        </div>
        <div className="px-4 py-2 bg-red-600 text-white rounded-t-lg">कोशी</div>
        <div className="px-4 py-2 bg-red-600 text-white rounded-t-lg">मधेश</div>
        <div className="px-4 py-2 bg-red-600 text-white rounded-t-lg">
          वागमती
        </div>
        <div className="px-4 py-2 bg-red-600 text-white rounded-t-lg">
          गण्डकी
        </div>
        <div className="px-4 py-2 bg-red-600 text-white rounded-t-lg">
          प्रदेश ५
        </div>
        <div className="px-4 py-2 bg-red-600 text-white rounded-t-lg">
          लुम्बिनी
        </div>
        <div className="px-4 py-2 bg-red-600 text-white rounded-t-lg">
          सुदूरपश्चिम
        </div>
        <div className="px-4 py-2 bg-blue-900 text-white rounded-t-lg">
          विचार
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2">
          <img
            src={mainArticle.imageSrc}
            alt="Main Article Image"
            className="w-half h-auto mb-4"
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

        <div className="col-span-1">
          <div className="space-y-4">
            {sideArticles.map((article, index) => (
              <div className="flex space-x-4" key={index}>
                <img
                  src={article.imageSrc}
                  alt="Article Image"
                  className="w-24 h-24 object-cover"
                />
                <div>
                  <h3 className="font-bold">{article.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1">
          <div className="space-y-4">
            {opinionArticles.map((article, index) => (
              <div className="flex space-x-4" key={index}>
                <img
                  src={article.imageSrc}
                  alt="Opinion Image"
                  className="w-24 h-24 object-cover"
                />
                <div>
                  <h3 className="font-bold">{article.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
