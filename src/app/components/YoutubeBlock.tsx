type ImageProps = {
  src: string;
  alt?: string;
  className?: string;
};

const Image: React.FC<ImageProps> = ({ src, alt = "", className }) => (
  <img src={src} alt={alt} className={className} loading="lazy" />
);

const YoutubeBlock = () => {
  return (
    <>
      <footer className="flex justify-center items-center px-16 py-7 w-full text-3xl font-bold leading-6 text-white bg-neutral-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-[1130px] max-w-full">
          <p className="self-center">News Aone YouTube</p>
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4117fb84-22ee-47d7-9e38-ec1806c94a93?apiKey=364294d949e44cc6a45273c421c40ca2&"
            className="mt-3 w-full border-2 border-white border-solid aspect-[2.5] max-md:max-w-full"
            alt="YouTube thumbnail"
          />
        </div>
      </footer>
      ;
    </>
  );
};

export default YoutubeBlock;
