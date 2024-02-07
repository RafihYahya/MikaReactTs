import { Fire, Heart, Warning } from "@phosphor-icons/react";
import { useState } from "react"

type Tabsprop = {
    Number: number
    NumberAdder: (i: number,j:number) => void
}

function TabsComp({NumberAdder,Number}: Tabsprop) {
    const [toggleMobile] = useState<boolean>(false);
    const TabsNumber = 3;
    return (

        toggleMobile ? <div className="flex justify-between items-center h-full w-[80%] m-4 ">
            <div onClick={()=> NumberAdder(0,TabsNumber)} className=" transition-all duration-300 ease-in border-t-4 border-pink-600 
                        text-center bg-[#EDE8E807]  backdrop-blur-sm py-4 px-[07%] rounded-md text-[#EDE8E8] text-lg">
                Most Liked
            </div>
            <div onClick={()=> NumberAdder(1,TabsNumber)} className={`  transition-all duration-300 ease-in text-center bg-[#EDE8E807]
                     hover:bg-pink-600/50 cursor-pointer hover:backdrop-blur-none backdrop-blur-sm 
                     py-4 px-[07%] rounded-md text-[#EDE8E8] text-lg`}>Trending</div>
            <div onClick={()=> NumberAdder(2,TabsNumber)} className="transition-all duration-300 ease-in    text-center bg-[#EDE8E807]
                     hover:bg-pink-600/50 cursor-pointer hover:backdrop-blur-none backdrop-blur-sm 
                     py-4 px-[07%] rounded-md text-[#EDE8E8] text-lg">Controversial</div>
        </div>


            :


            <div className="flex justify-center gap-8 items-center h-full w-full m-4 px-8 ">

                <div  onClick={()=> NumberAdder(0,TabsNumber)} className={`${Number == 0 ? "border-t-4 border-pink-600 group flex items-center " : ""} cursor-pointer group flex items-center  hover:border-t-4
                 hover:border-pink-600 rounded-md `}>
                    <div className={`  ${Number == 0 ? " text-pink-600 text-lg" : ''}  text-center  py-4  px-2 rounded-md text-lg`}><Heart size={32} />
                    </div>
                    <h1 className={`${Number == 0? "transition-all duration-300 ease-in  text-center text-pink-600 text-lg md:block hidden" : '' } transition-all duration-300 ease-in  text-center  
                    text-lg hidden `}>Most Liked</h1>
                </div>
                <div  onClick={()=> NumberAdder(1,TabsNumber)} className={`${Number == 1 ? "border-t-4 border-pink-600 group flex items-center " : ""} cursor-pointer group flex items-center  hover:border-t-4
                 hover:border-pink-600 rounded-md `}>
                    <div className={`  ${Number == 1 ? " text-pink-600 text-lg" : ''}  text-center  py-4  px-2 rounded-md text-lg`}><Fire size={32} />
                    </div>
                    <h1 className={`${Number == 1? "transition-all duration-300 ease-in  text-center text-pink-600 text-lg md:block hidden" : '' } transition-all duration-300 ease-in  text-center  
                    text-lg hidden `}>Trending</h1>
                </div>
                <div  onClick={()=> NumberAdder(2,TabsNumber)} className={`${Number == 2 ? "border-t-4 border-pink-600 group flex items-center " : ""} cursor-pointer group flex items-center  hover:border-t-4
                 hover:border-pink-600 rounded-md `}>
                    <div className={`  ${Number == 2 ? " text-pink-600 text-lg" : ''}  text-center  py-4  px-2 rounded-md text-lg`}><Warning size={32} />
                    </div>
                    <h1 className={`${Number == 2? "transition-all duration-300 ease-in  text-center text-pink-600 text-lg md:block hidden" : '' } transition-all duration-300 ease-in  text-center  
                    text-lg hidden `}>Controversial</h1>
                </div>

            </div>

    )
}

export default TabsComp