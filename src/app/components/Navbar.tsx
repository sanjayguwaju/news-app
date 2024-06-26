type ImageProps = { src: string; alt: string; className: string };

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const NavigationBar: React.FC = () => (
  <div className="flex gap-0 justify-center pr-20 pl-10 max-w-full bg-red-600 w-[1130px] max-md:flex-wrap max-md:px-5">
    <Image
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/17cfa086c23e349d5ad8911af71f05837c6a5b683f5684748b94976e656861e3?apiKey=364294d949e44cc6a45273c421c40ca2&"
      alt=""
      className="shrink-0 border-r border-solid aspect-[1.14] border-blue-800 border-opacity-30 w-[52px]"
    />
    <NavItem text="समाचार" />
    <NavItem text="समाज" />
    <NavItem text="राजनीत" />
    <NavItem text="प्रदेश" />
    <NavItem text="राष्ट्रिय" />
    <NavItem text="विचार" />
    <NavItem text="मनोरञ्जन" />
    <NavItem text="खेलकुद" />
    <NavItem text="अन्य" />
  </div>
);

const NavItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="justify-center p-4 border-r border-solid border-blue-800 border-opacity-30">
    {text}
  </div>
);

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-center items-center self-stretch px-16 mt-6 w-full text-lg leading-6 text-white whitespace-nowrap bg-red-600 shadow-sm max-md:px-5 max-md:max-w-full">
        <NavigationBar />
      </nav>
    </>
  );
};

export default Navbar;
