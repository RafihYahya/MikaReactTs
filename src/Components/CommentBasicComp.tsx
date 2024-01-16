
const CommentBasicComp = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-1 my-12">
      <div className=" h-32 w-full  rounded-md flex justify-center items-start gap-2 p-2">
        <div className="flex items-center justify-center flex-col gap-2">
          <div className="rounded-full bg-[#ede8e815] w-20 h-20"></div>
          <h3 className="text-xs">Miaw Profile</h3>
        </div>
        <div className="w-[90%] h-full bg-[#ede8e815] rounded-md backdrop-blur-md"></div>
        <div className="flex justify-center items-center flex-col gap-1">
          <div className="rounded-full bg-[#ede8e815] w-8 h-8"></div>
          <div className="rounded-full bg-[#ede8e815] w-8 h-8"></div>
          <div className="rounded-full bg-[#ede8e815] w-8 h-8"></div>
        </div>
      </div>
      <div className="bg-[#ede8e815] h-12 w-[98%] rounded-sm flex items-center justify-center"><h3 className="text-sm uppercase">Comment</h3></div>
    </div>
  )
}

export default CommentBasicComp