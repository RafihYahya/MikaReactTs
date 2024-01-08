

function CreatePostComp() {
  return (
    <div className=" border-t-4 border-pink-600/75 flex items-start justify-between gap-4 mx-auto my-[5vh] bg-[#ede8e807] w-[80%] h-[35vh] md:h-[45vh] lg:h-[50vh] rounded-lg py-8 px-8">
      
      <div className="h-36 w-36 rounded-full bg-[#ede8e815] translate-x-[-5%] lg:block hidden"></div>
      <div className="flex items-end justify-between flex-col  h-full gap-2 lg:w-[80%] w-full ">
        <div className="bg-[#ede8e815] h-[90%] w-full py-10 rounded-md md:rounded-lg "></div>
        <div className="group transition-colors duration-200  ease-in  md:mt-2 border-[3px] cursor-pointer border-pink-800/75 hover:border-pink-600/75 hover:bg-pink-600/40  w-32 md:w-36 h-20 rounded-sm md:rounded-md md:translate-y-[15%] translate-y-[25%] py-2 md:py-0 flex items-center justify-center ">
          <h1 className="transition-colors duration-200 ease-in  uppercase text-lg">Post</h1>
          </div>
      </div>
      
    </div>
  )
}

export default CreatePostComp