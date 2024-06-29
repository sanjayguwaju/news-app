import React from 'react'

const RelatedSection = () => {
  return (
    <>
        <div className="bg-white text-black p-4">
          <div className="flex items-center bg-red-600 text-white p-2">
            <h2 className="text-lg font-bold">सम्बन्धित समाचार</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="flex">
              <img src="https://placehold.co/100x100" alt="news-image-1" className="w-24 h-24 object-cover mr-4">
              <p>एसईईको नतिजा सार्वजनिक - ४७.६ प्रतिशत विद्यार्थी उत्तीर्ण, १८८ जनाले ४ जीपीए ल्याए</p>
            </div>
            <div className="flex">
              <img src="https://placehold.co/100x100" alt="news-image-2" className="w-24 h-24 object-cover mr-4">
              <p>चलिरहेको टेबल पंखा शरीरमा खस्दा एक जनाको मृत्यु</p>
            </div>
            <div className="flex">
              <img src="https://placehold.co/100x100" alt="news-image-3" className="w-24 h-24 object-cov er mr-4">
              <p>मधेश प्रदेशमा ४ दिने 'प्रदेश स्तरीय नमुना युवा संसद अभ्यास'को उद्घाटन</p>
            </div>
            <div className="flex">
              <img src="https://placehold.co/100x100" alt="news-image-4" className="w-24 h-24 object-cover mr-4">
              <p>धनुषामा २९ जोडिले गरे दाइजोमुक्त सामुहिक विवाह</p>
            </div>
            <div className="flex">
              <img src="https://placehold.co/100x100" alt="news-image-5" className="w-24 h-24 object-cover mr-4">
              <p>प्रेमिकाले धोका दिएको भन्दै आफ्नो फेसबुकमा स्टाटस लेखेर लेखेर प्रेमीले गरे आत्महत्या</p>
            </div>
            <div className="flex">
              <img src="https://placehold.co/100x100" alt="news-image-6" className="w-24 h-24 object-cover mr-4">
              <p>यो हप्ताभित्र एसईईको नतिजा प्रकाशनको तयारी</p>
            </div>
          </div>
        </div>

    </>
  )
}

export default RelatedSection