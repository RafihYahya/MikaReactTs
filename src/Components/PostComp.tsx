import { Chats, Heart, Share, ThumbsDown, ThumbsUp } from "@phosphor-icons/react"

const PostComp = () => {
  return (
    <div className=" w-[93%] md:w-[90%] lg:w-[75%] lg:h-[39%] 2xl:h-[31.5%] h-[40%] md:h-[30%]  mx-auto rounded-md flex justify-between items-center lg:my-[10%] mt-[20%] mb-[50%]  md:mt-[20%] md:mb-[20%] md:p-4 md:mr-[7%] lg:mr-[18%] md:flex-row flex-col gap-4 md:gap-0">
      <div className=" md:w-[15%] md:h-full w-8 h-8 rounded-md m-2 flex items-center justify-between md:flex-col flex-row  ">
        <div className="bg-[#ede8e820] max-h-24 h-full w-20 md:block hidden  mb-2 rounded-full border-2 border-pink-600/75"></div>
        <div className="h-full w-full flex justify-center items-center md:flex-col flex-row gap-20 md:gap-2 ">
          <div className="bg-[#ede8e815] backdrop-blur-md rounded-full w-14 h-14 flex justify-center items-center p-4 md:p-0 hover:text-pink-600/75 transition-colors duration-300 ease-in-out"><Heart size={28} />
          </div>
          <div className="bg-[#ede8e815] backdrop-blur-md rounded-full w-14 h-14 flex justify-center items-center p-4 md:p-0  hover:text-pink-600/75 transition-colors duration-300 ease-in-out"><ThumbsUp size={28} /></div>
          <div className="bg-[#ede8e815] backdrop-blur-md rounded-full w-14 h-14  flex justify-center items-center p-4 md:p-0 hover:text-pink-600/75 transition-colors duration-300 ease-in-out"><ThumbsDown size={28} /></div>
        </div>
      </div>
      <div className="flex justify-between items-center flex-col h-full w-full">
        <div className="bg-[#ede8e80a] backdrop-blur-md w-full h-full rounded-md mb-2 border-pink-600/75 border-t-2 ">
          <p className="text-left m-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, id velit! Rerum earum sapiente inventore esse repellat vitae aspernatur veniam tenetur velit, minima nulla eum quod blanditiis praesentium commodi dicta.</p>
        </div>
        <div className="w-full h-20 flex items-center justify-center gap-1">
          <div className="bg-[#ede8e805] w-full h-full  rounded-sm flex items-center justify-center border-2 border-pink-600/50 uppercase text-md lg:p-0 p-2">
            <div className="flex items-center justify-center gap-2 ">
              <Chats size={32} />
              <h2 >Comments</h2>
            </div></div>
          <div className="md:flex hidden bg-[#ede8e805] w-[40%] h-full rounded-sm  items-center justify-center border-2 border-pink-600/50 uppercase text-md"><div className="flex items-center justify-center gap-2 ">
              <Share size={32} />
              <h2 >Share</h2>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default PostComp