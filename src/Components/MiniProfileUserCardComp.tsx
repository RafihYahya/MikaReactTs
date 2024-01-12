import { ChatsCircle } from "@phosphor-icons/react"

const MiniProfileUserCardComp = () => {
  return (
    <div className="flex justify-start items-center h-20 rounded-md  mb-1 pl-6 bg-[#EDE8E801]  ml-2 mr-3   backdrop-blur-sm gap-10">

      <div className="w-16 h-16 bg-[#EDE8E80e] backdrop-blur-sm rounded-full border-l-2 border-r-2 border-pink-500/30"></div>
      <div>
        <h3 className="text-sm font-light  ">Miaw Profile</h3>
        <h4 className="text-xs text-green-400">Online</h4>
      </div>
      <div className="text-pink-600/75"><ChatsCircle size={32} />

      </div>
    </div>
  )
}

export default MiniProfileUserCardComp