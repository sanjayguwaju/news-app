const navItems = [
  { label: "समाचार", key: "news" },
  { label: "राजनीति", key: "politics" },
  { label: "समाज", key: "society" },
  { label: "विचार", key: "opinion" },
  { label: "अर्थतन्त्र", key: "economy" },
  { label: "राष्ट्रिय", key: "national" },
  { label: "अन्तर्राष्ट्रिय", key: "international" },
  { label: "कृषि", key: "agriculture" },
  { label: "अन्तर्वार्ता", key: "interview" },
  { label: "शिक्षा", key: "education" },
  { label: "स्वास्थ्य", key: "health" },
  { label: "विज्ञान प्रविधि", key: "technology" },
  { label: "खेलकुद", key: "sports" },
  { label: "मनोरञ्जन", key: "entertainment" }
];

const MobileNav = () => {
  return (
    <div className="bg-red-600 w-64 h-screen fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between p-4 bg-red-700">
        <img
          src="https://placehold.co/50x50.png?text=Logo"
          alt="news logo"
          className="h-10 w-10"
        />
        <span className="text-white text-2xl font-bold">newsaone</span>
        <button className="text-white text-xl">
          <img
            src="https://openui.fly.dev/openui/24x24.svg?text=⬅️"
            alt="close menu"
          />
        </button>
      </div>
      <nav className="mt-4">
        <ul className="text-white text-lg">
          {navItems.map((item) => (
            <li
              key={item.key}
              className="py-2 px-4 hover:bg-red-500 cursor-pointer"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
