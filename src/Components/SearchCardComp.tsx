import { MagnifyingGlass } from "@phosphor-icons/react"
import SmallFlexComp from "./smallFlexComp"

const SearchCardComp = ({ props, position }: { props: string, position: string }) => {
  return (
    <div id="notifCard" className={`z-100 ${props} absolute  bg-[#EDE8E805] backdrop-blur-lg border-b-2 border-t-2  border-pink-600/75 w-[45vw] h-[85vh]  rounded-md ${position} flex items-center justify-between flex-col py-4 `}>
      <div className="flex justify-center items-center w-full p-4 flex-col gap-2 ">
        <div className="w-full flex items-center   justify-center gap-2 ">
          <input className="group font-light text-left focus:border-2 focus:border-pink-600/50 p-4 text-sm mt-8 w-[70%] h-14 bg-[#EDE8E815] backdrop-blur-md rounded-md" type="text" />
          <MagnifyingGlass className="mt-8 " size={32} />
        </div>
        <div className="h-4 2xl:h-10"></div>
       <SmallFlexComp/>
       <SmallFlexComp/>
       <SmallFlexComp/>
       <SmallFlexComp/>
      </div>
      <div className="flex items-center justify-between px-4 gap-4 cursor-pointer">
        <h1 className="uppercase 2xl:text-sm  text-pink-600/75 font-semibold text-xs lg:translate-y-[-50%] 2xl:translate-y-0">All Searches</h1>
        <MagnifyingGlass className="text-pink-600/75 lg:hidden 2xl:block" size={32} />
      </div>
    </div>
  )
}

export default SearchCardComp