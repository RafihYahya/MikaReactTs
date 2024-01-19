import { Heart, ThumbsDown, ThumbsUp } from "@phosphor-icons/react"

const PostListingComp = () => {
  return (
    <div id="postlistingFrame" className="border-t-2 border-black hover:border-pink-600 transition-all duration-200 ease-in-out  w-full h-48  mb-8 rounded-md backdrop-blur-md flex items-center justify-between  gap-4  p-4 ">
      <div className="flex items-center justify-center flex-col gap-3 ">
        <div className="w-24 h-24 bg-[#EDE8E810] rounded-full border-2 border-pink-600/20"></div>
        <h3 className="text-sm">Miaw</h3>
      </div>
      <div className="w-full  flex items-center justify-center gap-3  h-full">
        <div className=" w-full h-full bg-[#EDE8E805] rounded-lg backdrop-blur-md p-6"> 
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestias veritatis, atque placeat, deserunt veniam fuga ad, temporibus quos quod tempora. Maiores sapiente enim id doloremque laborum, voluptatem qui autem!</p>
        </div>
        <div className="w-24 h-full flex items-center justify-between flex-col gap-2">
          <div className="w-full h-12 bg-[#EDE8E80e] rounded-full flex justify-center items-center gap-2 p-4">
            <div className="text-blue-500/75"><ThumbsUp size={25} /></div>
            <div>33<span className="text-blue-500/75 uppercase font-bold">k</span></div>
          </div>
          
          <div className="w-full h-12 bg-[#EDE8E80e] rounded-full flex justify-center items-center gap-2 p-4">
            <div className="text-red-500/75"><ThumbsDown size={25} /></div>
            <div>72<span className="text-red-500/75  uppercase font-bold">k</span></div>
          </div>
          <div className="w-full h-12 bg-[#EDE8E80e] rounded-full flex justify-center items-center gap-2 p-4">
            <div className="text-pink-500/75"><Heart size={25} />

</div>
            <div>18<span className="text-pink-500/75 font-bold uppercase">k</span></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PostListingComp