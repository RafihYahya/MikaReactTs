import { EnvelopeOpen } from "@phosphor-icons/react"


function CreatePostComp() {
  return (
    <div className=" border-t-4 border-pink-600/75 flex items-start justify-between gap-4 mx-auto my-[5vh] bg-[#ede8e807] w-[80%] lg:w-[70%] h-[30vh] lg:h-[32vh] rounded-lg py-8 px-8">
      <div className="h-36 w-36 rounded-full bg-[#ede8e815] translate-x-[-5%] lg:block hidden"></div>
      <div className="flex items-end justify-between flex-col  h-full gap-2 lg:w-[80%] w-full ">
        <textarea  className="bg-[#ede8e815] h-[90%] w-full p-6 rounded-md md:rounded-lg text-left focus:border-2 focus:border-pink-600/50"></textarea>
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