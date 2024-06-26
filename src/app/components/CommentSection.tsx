import React from 'react'

const HeaderWithText: React.FC<{ text: string }> = ({ text }) => (
    <div className="flex flex-col justify-center items-start">
      <div className="flex flex-col justify-center px-1 border-r-4 border-white border-solid">
        <div className="justify-center px-7 py-3 bg-red-600  text-white max-md:px-5">
          {text}
        </div>
      </div>
    </div>
  );

const CommentSection: React.FC = () => (
    <section className="flex flex-col justify-center items-start mt-14 max-w-full text-2xl font-semibold leading-6 text-white bg-red-600 w-[840px] max-md:pr-5 max-md:mt-10">
      <HeaderWithText text="तपाईको प्रतिक्रिया !" />
      <div className="flex gap-5 justify-between items-start px-5 pt-2.5 pb-8 mt-5 max-w-full border-b border-gray-200 border-solid w-[824px] max-md:flex-wrap">
        <div className="text-sm font-semibold leading-6 text-zinc-900">
          0 comments
        </div>
        <div className="flex gap-px text-neutral-600">
          <div className="grow my-auto text-sm leading-6">Sort by</div>
          <div className="flex gap-1 justify-center px-2.5 py-2 text-xs font-bold leading-5 text-center whitespace-nowrap rounded-sm border border-solid bg-neutral-100 border-neutral-300">
            <div className="grow">Oldest</div>
            <Image
              src="https://res.cloudinary.com/dz3facqgc/image/upload/v1719322207/tqaltpcfdsdkk697jeij.png"
              alt=""
              className="shrink-0 self-start w-1.5 aspect-[0.55]"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-6 max-w-full text-sm leading-5 text-zinc-900 w-[824px] max-md:flex-wrap">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4f550db6e5fccefdf4161c5520a3793d976e76482f4ba0bfa4eede9177635d6?apiKey=364294d949e44cc6a45273c421c40ca2&"
          alt=""
          className="flex overflow-hidden relative flex-col justify-center self-start px-5 py-5 aspect-square"
        />
        <div className="shrink-0 max-w-full bg-white border border-gray-300 border-solid h-[62px] w-[768px]" />
      </div>
      <div className="flex gap-1.5 justify-center px-5 py-2.5 mt-6 max-w-full text-xs leading-4 text-indigo-800 border-t border-gray-200 border-solid w-[824px] max-md:flex-wrap">
        <Image
          src="https://res.cloudinary.com/dz3facqgc/image/upload/v1719322207/tqaltpcfdsdkk697jeij.png"
          alt="Facebook Comments Plugin"
          className="shrink-0 w-3.5 aspect-square"
        />
        <div className="flex-auto max-md:max-w-full">
          Facebook Comments Plugin
        </div>
      </div>
    </section>
  );

const CommentSectionNew = () => {
  return (
    <>
          <CommentSection />

    </>
  )
}

export default CommentSectionNew