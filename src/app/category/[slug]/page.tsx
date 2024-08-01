"use client"

import Card from '@/app/components/card';
import Pagination from '@/app/components/pagination';
import { fetchSinglePosts } from '@/app/libs/api/fetchGraphQL';
import { SINGLE_POSTS_QUERY } from '@/app/libs/api/queries';
import React, { useEffect, useState } from 'react';

const categoryData = [
    {
        id: 1,
        image: "http://localhost:5000/media/PM-KP-Sharma-Oli.jpg",
        title: "स्ववियु निर्वाचनका उम्मेदवारसंग खुल्ला सडक बहस, एक जना मात्र प्यनलिस्ट !",
        description: "मधेश प्रदेशको राजधानी जनकपुरधाम स्थित रहेको राजर्षी जनक विश्वविद्यालयमा साउन १७ गते  स्वतन्त्र विद्यार्थी युनियन (स्ववियु)को निर्वाचन हुन लागेको छ ।",
        link: "#"
    },
    {
        id: 2,
        image: "http://localhost:5000/media/Trishuli.jpg",
        title: "बाढीले भक्तपुरका विभिन्न ठाउँमा क्षति, सतर्कता अपनाउन आग्रह",
        description: "१६ साउन, काठमाडौं । रातभरको वर्षाले भक्तपुरका विभिन्न स्थानमा बाढी पसेर क्षति पुर्‍याएको छ । बाढीले मनोहरा र हनुमन्ते खोला किनार क्षेत्रका घर, विद्यालय र ग्यारेजमा क्षति पुर्याएको हो। हनुमन्तेको करिडोर सडक ठप्प भएको छ।",
        link: "#"
    },
    {
        id: 3,
        image: "http://localhost:5000/media/jsqclvbmi1lz42evdqas.jpg",
        title: "गृहमन्त्री रमेश लेखक भन्छन मानव बेचबिखन अनुसन्धानका लागि",
        description: "गृहमन्त्री रमेश लेखकले मानव बेचबिखन अपराधको अनुसन्धानका लागि २५ दिनको समय पर्याप्त नहुने भन्दै  ३ महिनाको समय तोक्ने गरी कानुन संशोधन गरिने बताएका छन् ।",
        link: "#"
    },
    {
        id: 4,
        image: "http://localhost:5000/media/newphoto.png",
        title: "स्ववियु निर्वाचनका उम्मेदवारसंग खुल्ला सडक बहस, एक जना मात्र प्यनलिस्ट !",
        description: "मधेश प्रदेशको राजधानी जनकपुरधाम स्थित रहेको राजर्षी जनक विश्वविद्यालयमा साउन १७ गते  स्वतन्त्र विद्यार्थी युनियन (स्ववियु)को निर्वाचन हुन लागेको छ ।",
        link: "#"
    },
    {
        id: 5,
        image: "http://localhost:5000/media/jsqclvbmi1lz42evdqas.jpg",
        title: "बाढीले भक्तपुरका विभिन्न ठाउँमा क्षति, सतर्कता अपनाउन आग्रह",
        description: "१६ साउन, काठमाडौं । रातभरको वर्षाले भक्तपुरका विभिन्न स्थानमा बाढी पसेर क्षति पुर्‍याएको छ । बाढीले मनोहरा र हनुमन्ते खोला किनार क्षेत्रका घर, विद्यालय र ग्यारेजमा क्षति पुर्याएको हो। हनुमन्तेको करिडोर सडक ठप्प भएको छ।",
        link: "#"
    },
    {
        id: 6,
        image: "http://localhost:5000/media/bachat-rojgarpatra.jpg",
        title: "गृहमन्त्री रमेश लेखक भन्छन मानव बेचबिखन अनुसन्धानका लागि",
        description: "गृहमन्त्री रमेश लेखकले मानव बेचबिखन अपराधको अनुसन्धानका लागि २५ दिनको समय पर्याप्त नहुने भन्दै  ३ महिनाको समय तोक्ने गरी कानुन संशोधन गरिने बताएका छन् ।",
        link: "#"
    },
    {
        id: 7,
        image: "http://localhost:5000/media/PM-KP-Sharma-Oli.jpg",
        title: "स्ववियु निर्वाचनका उम्मेदवारसंग खुल्ला सडक बहस, एक जना मात्र प्यनलिस्ट !",
        description: "मधेश प्रदेशको राजधानी जनकपुरधाम स्थित रहेको राजर्षी जनक विश्वविद्यालयमा साउन १७ गते  स्वतन्त्र विद्यार्थी युनियन (स्ववियु)को निर्वाचन हुन लागेको छ ।",
        link: "#"
    },
    {
        id: 8,
        image: "http://localhost:5000/media/PM-KP-Sharma-Oli.jpg",
        title: "बाढीले भक्तपुरका विभिन्न ठाउँमा क्षति, सतर्कता अपनाउन आग्रह",
        description: "१६ साउन, काठमाडौं । रातभरको वर्षाले भक्तपुरका विभिन्न स्थानमा बाढी पसेर क्षति पुर्‍याएको छ । बाढीले मनोहरा र हनुमन्ते खोला किनार क्षेत्रका घर, विद्यालय र ग्यारेजमा क्षति पुर्याएको हो। हनुमन्तेको करिडोर सडक ठप्प भएको छ।",
        link: "#"
    },
    {
        id: 9,
        image: "http://localhost:5000/media/PM-KP-Sharma-Oli.jpg",
        title: "गृहमन्त्री रमेश लेखक भन्छन मानव बेचबिखन अनुसन्धानका लागि",
        description: "गृहमन्त्री रमेश लेखकले मानव बेचबिखन अपराधको अनुसन्धानका लागि २५ दिनको समय पर्याप्त नहुने भन्दै  ३ महिनाको समय तोक्ने गरी कानुन संशोधन गरिने बताएका छन् ।",
        link: "#"
    }
];

const CategoryList: React.FC = () => {
  const [singePosts, setSinglePosts] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await fetchSinglePosts(SINGLE_POSTS_QUERY);
            console.log({ data });
            setSinglePosts(data?.SinglePosts?.docs);
          } catch (err) {
            console.log(err);
          } finally {
            console.log("finallyyy");
          }
        };
    
        fetchData();
    }, []);

    return (
        <>
            <div className="flex justify-center">
                <div className="max-w-full text-xs w-[1130px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {singePosts?.map((category: any) => (
                            <Card
                                key={category.id}
                                image={category.media.url}
                                title={category.title}
                                postId={category.id}
                            />
                        ))}
                    </div>
                    <Pagination />
                </div>
            </div>

        </>
    );
};

export default CategoryList;