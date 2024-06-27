import React from "react";

const footerData = {
  sections: [
    {
      title: "कम्पनी",
      links: [
        { name: "हाम्रो बारेमा", url: "#" },
        { name: "करियर", url: "#" },
        { name: "ब्राण्ड केन्द्र", url: "#" },
        { name: "ब्लग", url: "#" },
      ],
    },
    {
      title: "सहयोग केन्द्र",
      links: [
        { name: "डिस्कोर्ड सर्भर", url: "#" },
        { name: "ट्विटर", url: "#" },
        { name: "फेसबुक", url: "#" },
        { name: "सम्पर्क गर्नुहोस्", url: "#" },
      ],
    },
    {
      title: "कानुनी",
      links: [
        { name: "गोपनीयता नीति", url: "#" },
        { name: "लाइसेन्सिङ", url: "#" },
        { name: "नियम र सर्तहरू", url: "#" },
      ],
    },
    {
      title: "डाउनलोड",
      links: [
        { name: "म्याकओएस", url: "#" },
        { name: "एन्ड्रोइड", url: "#" },
        { name: "विन्डोज", url: "#" },
        { name: "म्याकओएस", url: "#" },
      ],
    },
  ],
};

const Footer: React.FC = () => (
  <footer className="bg-red-600 text-white">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        {footerData.sections.map((section) => (
          <div key={section.title}>
            <h2 className="mb-6 text-2xl font-semibold text-white uppercase dark:text-white">
              {section.title}
            </h2>
            <ul className="text-white font-medium">
              {section.links.map((link) => (
                <li className="mb-4" key={link.name}>
                  <a href={link.url} className="hover:underline">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="px-4 py-6 bg-red-400 md:flex md:items-center md:justify-between">
        <span className="text-xl text-white sm:text-center">
          © 2024: NewsAone मा सर्वाधिक सुरक्षित छ
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
          {/* Social icons would be rendered similarly, potentially with a different data structure if needed */}
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center text-sm font-semibold leading-6 text-center bg-red-600 text-white py-6">
      <p className="mb-2">
        © 2024: NewsAone मा सर्वाधिक सुरक्षित छ।
        <span className="text-yellow-400 cursor-pointer ml-1">
          Privacy Policy
        </span>
        <span className="mx-1">|</span>
        <span className="text-yellow-400 cursor-pointer">सम्पर्क</span>
        <span className="mx-1">|</span>
        <span className="text-yellow-400 cursor-pointer">ाम्रो बारेमा</span>
      </p>
      <p>
        Design and Developed by:
        <span className="text-yellow-400 cursor-pointer ml-1">
          Protech Nepal Pvt.Ltd
        </span>
      </p>
    </div>
  </footer>
);

export default Footer;
