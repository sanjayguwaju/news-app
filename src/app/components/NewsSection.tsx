import React from "react";

const NewsSection = () => {
  return (
    
    <section className="flex justify-center items-center self-stretch px-16 pt-8 pb-16 w-full max-md:px-5 max-md:max-w-full">
        <div className="w-[1130px] mx-auto p-4">
      <div className="bg-red-600 text-white px-4 py-2">
        <h2 className="font-bold">राजनीति</h2>
      </div>
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="w-full md:w-2/3 p-4">
          <h3 className="font-bold text-lg mb-2">
            पत्रकार महासंघको निर्वाचन असार २२ गते
          </h3>
          <img
            src="https://placehold.co/600x400"
            alt="Main News Image"
            className="w-full mb-4"
          />
          <p>
            काठमाडौं,०८ असार । नेपाल पत्रकार महासंघको निर्वाचन कार्यतालिका
            सार्वजनिक भएको छ । सार्वजनिक निर्वाचन कार्यतालिका अनुसार असार २३ गते
            बिहान १० बजेदेखि अपरान्ह ४ बजेसम्म उम्मेदवारको मनोनयन दर्ता गर्ने
            कार्यतालिका रहेको छ । त्यस्तै असार २२ गते बिहान ९ बजेदेखि साँझ ६
            बजेसम्म मतदान हुनेछ भने मतदान सकिए लगत्तै मतगणना कार्य सुरु हुने
            निर्वाचन समितिले ...
            <a href="#" className="text-blue-600">
              थप पढ्नुहोस्
            </a>
          </p>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="https://placehold.co/100x100"
                alt="News Image 1"
                className="w-20 h-20 object-cover mr-4"
              />
              <p>२७० केजी गाँजा सहित भारतीय ट्रक र चालक पक्राउ</p>
            </div>
            <div className="flex items-center">
              <img
                src="https://placehold.co/100x100"
                alt="News Image 2"
                className="w-20 h-20 object-cover mr-4"
              />
              <p>
                रोहित पौडेललाई हात लगाउने बंगालदेशी बलरमाथि आईसीसीको कारवाही
              </p>
            </div>
            <div className="flex items-center">
              <img
                src="https://placehold.co/100x100"
                alt="News Image 3"
                className="w-20 h-20 object-cover mr-4"
              />
              <p>सहकारीको रकम लुटपाट गर्न भारतीय नागरिक रोहतहाबाट पक्राउ</p>
            </div>
            <div className="flex items-center">
              <img
                src="https://placehold.co/100x100"
                alt="News Image 4"
                className="w-20 h-20 object-cover mr-4"
              />
              <p>
                नक्कली लाइसेन्स वितरण कार्यमा संलग्न अभियोगमा.पाँच जनालाई पक्राउ
              </p>
            </div>
            <div className="flex items-center">
              <img
                src="https://placehold.co/100x100"
                alt="News Image 5"
                className="w-20 h-20 object-cover mr-4"
              />
              <p>६ किलो सुन र ४८ लाख नगदसहित एक व्यक्ति पक्राउ</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </section>
    
  );
};

export default NewsSection;
