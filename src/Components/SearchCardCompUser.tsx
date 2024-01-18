import {  MagnifyingGlass } from "@phosphor-icons/react"

const SearchCardCompUser = ({ props }: { props: string }) => {
  return (
    <div id="notifCard" className={`z-100 ${props} absolute  bg-[#EDE8E805] backdrop-blur-md border-b-2 border-t-2  border-pink-600/75 w-[45vw] h-[85vh]  rounded-md left-[32%] 2xl:left-[25%] top-[7%] flex items-center justify-between flex-col py-4 `}>
      <div className="flex justify-center items-center w-full p-4 flex-col gap-2 ">
       
      </div>
      <div className="flex items-center justify-between px-4 gap-4 cursor-pointer">
        <h1 className="uppercase 2xl:text-sm text-lg text-pink-600/75 font-semibold ">All Searches</h1>
        <MagnifyingGlass className="text-pink-600/75" size={32} />
      </div>
    </div>
  )
}

export default SearchCardCompUser