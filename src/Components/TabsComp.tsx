import { Fire, Heart, Warning } from "@phosphor-icons/react";
import { useState } from "react"

function TabsComp() {
    const [toggleMobile] = useState<boolean>(false);
    return (

        toggleMobile ? <div className="flex justify-between items-center h-full w-[80%] m-4 ">
            <div className=" transition-all duration-300 ease-in border-t-4 border-pink-600 text-center bg-[#EDE8E807]  backdrop-blur-sm py-4 px-[07%] rounded-md text-[#EDE8E8] text-lg">Most Liked</div>
            <div className=" transition-all duration-300 ease-in text-center bg-[#EDE8E807] hover:bg-pink-600/50 cursor-pointer hover:backdrop-blur-none backdrop-blur-sm py-4 px-[07%] rounded-md text-[#EDE8E8] text-lg">Trending</div>
            <div className="transition-all duration-300 ease-in    text-center bg-[#EDE8E807] hover:bg-pink-600/50 cursor-pointer hover:backdrop-blur-none backdrop-blur-sm py-4 px-[07%] rounded-md text-[#EDE8E8] text-lg">Controversial</div>
        </div> :
            <div className="flex justify-center gap-8 items-center h-full w-full m-4 px-8 ">
                <div className=" group flex items-center  border-t-4 border-pink-600 rounded-md ">
                    <div className="    text-center  py-4  px-2 rounded-md text-pink-600 text-lg"><Heart size={32}/>
                    </div>
                    <h1 className="transition-all duration-300 ease-in  text-center text-pink-600 text-lg md:block hidden">Most Liked</h1>
                </div>
                <div className="cursor-pointer group flex items-center  hover:border-t-4 hover:border-pink-600 rounded-md ">
                    <div className="    text-center  py-4  px-2 rounded-md text-lg"><Fire size={32}/>
                    </div>
                    <h1 className="transition-all duration-300 ease-in  text-center  text-lg hidden ">Trending</h1>
                </div>
                <div className="cursor-pointer group flex items-center  hover:border-t-4 hover:border-pink-600 rounded-md ">
                    <div className="    text-center  py-4  px-2 rounded-md  text-lg"><Warning size={32}/>
                    </div>
                    <h1 className="transition-all duration-300 ease-in  text-center  text-lg hidden ">Controversial</h1>
                </div>
                
            </div>

    )
}

export default TabsComp