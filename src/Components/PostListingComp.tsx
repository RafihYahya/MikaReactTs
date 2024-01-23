import { Heart, ThumbsDown, ThumbsUp } from "@phosphor-icons/react"

const PostListingComp = () => {
  return (
    <div id="postlistingFrame" className="border-t-2 border-black hover:border-pink-600 transition-all duration-200 ease-in-out  w-full h-54 lg:h-54  mb-8 rounded-md backdrop-blur-md flex items-center justify-between  gap-4  p-4 ">
      <div className="hidden lg:flex items-center justify-center flex-col gap-3 ">
        <div className="w-24 h-24 bg-[#EDE8E810] rounded-full border-2 border-pink-600/20"></div>
        <h3 className="text-sm">Miaw</h3>
      </div>
      <div className="w-full  flex items-start justify-center  lg:gap-3  h-full lg:flex-row flex-col">
        <div className=" w-full h-full  rounded-lg backdrop-blur-md p-6"> 
          <p className="text-sm lg:text-left text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestias veritatis, atque placeat, deserunt veniam fuga ad, temporibus quos quod tempora. Maiores sapiente enim id doloremque laborum, voluptatem qui autem!</p>
        </div>
        <div className="w-24 h-full  flex items-center justify-center lg:justify-between flex-row lg:flex-col gap-14 lg:gap-1 mx-auto ">

          <div className="transition-all duration-300 ease-in-out group lg:w-14 hover:w-full lg:h-14 bg-[#EDE8E80e] rounded-full flex justify-center items-center lg:gap-2 lg:mx-6 p-4 lg:p-0">
            <div className="text-blue-500/75 lg:translate-x-5 group-hover:translate-x-0 transition-transform duration-300 "><ThumbsUp size={32} /></div>
            <div id='postlistingNums' className=" hidden lg:block  lg:invisible transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 lg:group-hover:visible">33<span className="text-blue-500/50 uppercase font-bold">k</span></div>
          </div>
          
          <div className="transition-all duration-300 ease-in-out group lg:w-14 hover:w-full lg:h-14 bg-[#EDE8E80e] rounded-full flex justify-center items-center lg:gap-2 lg:mx-6 p-4 lg:p-0">
            <div className="text-red-500/75 lg:translate-x-5 group-hover:translate-x-0 transition-transform duration-300"><ThumbsDown size={32} /></div>
            <div id='postlistingNums' className="transition-opacity duration-300 ease-in-out hidden lg:block  lg:invisible opacity-0 group-hover:opacity-100 lg:group-hover:visible">72<span className="text-red-500/50  uppercase font-bold">k</span></div>
          </div>
          <div className="transition-all duration-300 ease-in-out group lg:w-14 hover:w-full lg:h-14 bg-[#EDE8E80e] rounded-full flex justify-center items-center lg:gap-2 lg:mx-6 p-4 lg:p-0">
            <div className="text-pink-500/75 lg:translate-x-5 group-hover:translate-x-0 transition-transform duration-300"><Heart size={32} />
</div>
            <div id='postlistingNums' className="transition-opacity duration-300 ease-in-out hidden lg:block  lg:invisible opacity-0 group-hover:opacity-100 lg:group-hover:visible">18<span className="text-pink-500/50 font-bold uppercase">k</span></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PostListingComp