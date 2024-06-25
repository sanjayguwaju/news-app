import React from "react";

const NewsSection1 = () => {
  return (
    <section className="flex justify-center items-center self-stretch px-16 pt-8 pb-16 mt-6 w-full bg-neutral-200 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[1130px] p-4">
      <div className="bg-red-600 text-white px-4 py-2">
        <h2 className="font-bold">राजनीति</h2>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
          <div className="overflow-hidden">
            <img
              src="https://placehold.co/600x400"
              alt="News Image 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-black">
                मोटरसाइकल दुर्घटना हुँदा चालकको मृत्यु
              </p>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              src="https://placehold.co/600x400"
              alt="News Image 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-black">
                पत्रकार महासंघको निर्वाचन असार २२ गते
              </p>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              src="https://placehold.co/600x400"
              alt="News Image 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-black">
                जनकपुरधाममा यौनिक तथा लैङ्गिक अल्पसंख्यकले मनाए ‘प्राइड मन्थ’
              </p>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              src="https://placehold.co/600x400"
              alt="News Image 4"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-black">
                ७०० केजी गाँजा सहित भारतीय ट्रक र चालक पक्राउ
              </p>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              src="https://placehold.co/600x400"
              alt="News Image 5"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-black">
                सलाहीमाथि काशी पतीसँग मिलेर जेठी श्रीमतीको हत्या, श्रीमान र काशी
                पती पक्राउ
              </p>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              src="https://placehold.co/600x400"
              alt="News Image 6"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-black">
                रोहित पौडेललाई हात लगाउने बंगलादेशी बलरमाथि आईसीसीको कारवाही
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default NewsSection1;
