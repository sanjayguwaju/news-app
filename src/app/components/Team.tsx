import React from 'react'

const Team = () => {
    return (
        <>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow font-bold text-white max-md:mt-8">
                    <div className="pb-2 text-2xl leading-7 border-b border-solid border-stone-300">
                        हाम्रो टीम:
                    </div>
                    <div className="mt-7 text-lg leading-6">
                        Managing Director: <span> सनोज कुमार यादव </span> <br /> प्रधान सम्पादक{" "}
                        <span> गणेश कुमार मण्डल </span> <br />
                        Correspondents: <br /> <span>चन्दन रजक (Saptari)</span> <br />{" "}
                        <span>राजन कुमार यादव (Mahottari)</span> <br />
                        <span>कुमार पंकज (JanakpurDham)</span> <br />{" "}
                        <span>अशोक कुमार महतो शुरी (Dhanusha)</span> <br />
                        <span>पूजा कुमारी (Dhanusha)</span> <br />{" "}
                        <span>बिरेन्द्र कुमार यादव (Sarlahi)</span> <br />
                        <span>गणेश मण्डल (Kathmandu)</span> <br />{" "}
                        <span>अशोक राउत (Sarlahi)</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team