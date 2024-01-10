
const PostListingComp = () => {
  return (
    <div className="transition-transform duration-200 ease-in-out  w-full h-48 bg-[#EDE8E805] mb-8 rounded-md backdrop-blur-md flex items-center justify-between  gap-4  p-4 border-0  border-pink-600/75 hover:border-t-2 hover:border-pink-600/75">
        <div className="flex items-center justify-center flex-col gap-4">
          <div className="w-24 h-24 bg-[#EDE8E820] rounded-full border-2 border-pink-600/50"></div>
          <h3>Miaw</h3>
        </div>
        <div className="w-full  flex items-center justify-center gap-3  h-full">
            <div className=" w-full h-full bg-[#EDE8E810] rounded-md"></div>
            <div className="w-24 h-full flex items-center justify-between flex-col gap-2">
              <div className="w-full h-12 bg-[#EDE8E810] rounded-full"></div>
              <div className="w-full h-12 bg-[#EDE8E810] rounded-full"></div>
              <div className="w-full h-12 bg-[#EDE8E810] rounded-full"></div>
            </div>
        </div>

    </div>
  )
}

export default PostListingComp