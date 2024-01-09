import { Chats, Heart, Share, ThumbsDown, ThumbsUp } from "@phosphor-icons/react"

const PostComp = () => {
  return (
    <div className=" w-[75%] h-[32%]  mx-auto rounded-md flex justify-between items-center my-[5%]">
      <div className=" w-[15%] h-full rounded-md m-2 flex items-center justify-between flex-col ">
        <div className="bg-[#ede8e820] h-40 w-24 mb-2 rounded-full border-2 border-pink-600/75"></div>
        <div className="h-full w-full flex justify-center items-center flex-col gap-2">
          <div className="bg-[#ede8e820] rounded-full w-16 h-16 flex justify-center items-center"><Heart size={28} />
          </div>
          <div className="bg-[#ede8e820] rounded-full w-16 h-16 flex justify-center items-center"><ThumbsUp size={28} /></div>
          <div className="bg-[#ede8e820] rounded-full w-16 h-16 flex justify-center items-center"><ThumbsDown size={28} /></div>
        </div>
      </div>
      <div className="flex justify-between items-center flex-col h-full w-full">
        <div className="bg-[#ede8e815] w-full h-full rounded-md mb-2 border-pink-600/75 border-t-2 ">
          <p className="text-left m-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, id velit! Rerum earum sapiente inventore esse repellat vitae aspernatur veniam tenetur velit, minima nulla eum quod blanditiis praesentium commodi dicta.</p>
        </div>
        <div className="w-full h-20 flex items-center justify-center gap-1">
          <div className="bg-[#ede8e805] w-full h-full  rounded-sm flex items-center justify-center border-2 border-pink-600/50 uppercase text-md">
            <div className="flex items-center justify-center gap-2 ">
              <Chats size={32} />
              <h2 >Comments</h2>
            </div></div>
          <div className="bg-[#ede8e805] w-[40%] h-full rounded-sm flex items-center justify-center border-2 border-pink-600/50 uppercase text-md"><div className="flex items-center justify-center gap-2 ">
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