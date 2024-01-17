import { EnvelopeOpen } from "@phosphor-icons/react"


function CreatePostComp() {
  return (
    <div id="postCreation" className=" backdrop-blur-md relative border-t-2 border-pink-600/75 flex items-start justify-between gap-4 mx-auto my-[5vh]  w-[80%] lg:w-[70%] h-[30vh] lg:h-[35vh] 2xl:h-[30vh] rounded-lg py-8 px-8 translate-x-[-5%]">
      <div id="borderMaker" className="absolute  w-64 h-64 rounded-bl-md  bottom-0 left-0 border-l-2 border-b-2 border-pink-600/75"></div>
      <div id="borderMaker2" className="absolute  w-64 h-64 rounded-br-md  bottom-0 right-0 border-r-2 border-b-2 border-pink-600/75"></div>
      <div className="flex justify-center items-center flex-col  gap-2">
        <div className="2xl:h-32 2xl:w-32 w-28 h-28 rounded-full bg-[#ede8e815]  lg:block hidden"></div>
        <h3 className="text-center text-sm  lg:block hidden font-light">Miaw Profile</h3>
      </div>
      <div className="flex items-end justify-between flex-col  h-full gap-2 lg:w-[80%] w-full ">
        <textarea  className="font-light text-sm backdrop-blur-md bg-[#ede8e80e] h-[90%] w-full p-6 rounded-md md:rounded-sm text-left focus:border-2 focus:border-pink-600/50"></textarea>
        <div className="group transition-colors duration-200  ease-in  md:mt-2 border-2 cursor-pointer border-pink-800/75 hover:border-pink-600/50 hover:bg-pink-600/40  w-32 md:w-36 h-20 rounded-sm md:rounded-md md:translate-y-[15%] translate-y-[25%] py-2 md:py-0 flex items-center justify-center ">
          <h1 className="transition-colors duration-200 ease-in  uppercase text-md">
            <div className="flex justify-center items-center gap-2">
            <EnvelopeOpen size={32} />
            <h2 className="text-md">Post</h2>

            </div>
          </h1>
          </div>
      </div>
    </div>
  )
}

export default CreatePostComp