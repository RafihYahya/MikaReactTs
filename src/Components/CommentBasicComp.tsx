import { Chat, Heart, ThumbsDown, ThumbsUp } from "@phosphor-icons/react"

const CommentBasicComp = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-1 my-14">
      <div className=" h-36 w-full  rounded-md flex justify-center items-start gap-2 p-2">
        <div className="flex items-center justify-center flex-col gap-2">
          <div className="rounded-full bg-[#ede8e815] w-24 h-24"></div>
          <h3 className="text-xs text-pink-600/75">Miaw Profile</h3>
        </div>
        <div className="w-[80%] h-full bg-[#ede8e80a] rounded-md backdrop-blur-md p-4">
          <p className="font-light text-sm text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae velit nobis omnis, vitae repudiandae cupiditate hic ratione nulla illo voluptatibus, voluptatum labore doloremque minima adipisci, earum ex incidunt eius? Repudiandae!</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-1">
          <div className="rounded-full bg-[#ede8e80a] backdrop-blur-md w-10 h-10 flex items-center justify-center"><Heart size={20} /></div>
          <div className="rounded-full bg-[#ede8e80a] backdrop-blur-md w-10 h-10 flex items-center justify-center"><ThumbsUp size={20} /></div>
          <div className="rounded-full bg-[#ede8e80a] backdrop-blur-md w-10 h-10 flex items-center justify-center"><ThumbsDown size={20} /></div>
        </div>
      </div>
      <div className="bg-[#ede8e80a] backdrop-blur-md h-14 w-[95%] rounded-lg flex items-center justify-center">
        <div className="flex items-center justify-center gap-2">
          <Chat size={28} />
          <h3 className="text-sm uppercase">Comment</h3>
        </div>
      </div>

    </div>
  )
}

export default CommentBasicComp