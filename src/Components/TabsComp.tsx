

function TabsComp() {
    return (
        
        <div className="flex justify-between items-center h-full w-[80%] m-4 ">
            <div className=" transition-all duration-300 ease-in border-t-4 border-pink-600 text-center bg-[#EDE8E805]  backdrop-blur-sm py-4 px-[07%] rounded-md text-[#EDE8E8] text-lg">Most Liked</div>
            <div className=" transition-all duration-300 ease-in text-center bg-[#EDE8E805] hover:bg-pink-600/50 cursor-pointer hover:backdrop-blur-none backdrop-blur-sm py-4 px-[07%] rounded-md text-[#EDE8E8] text-lg">Trending</div>
            <div className="transition-all duration-300 ease-in    text-center bg-[#EDE8E805] hover:bg-pink-600/50 cursor-pointer hover:backdrop-blur-none backdrop-blur-sm py-4 px-[07%] rounded-md text-[#EDE8E8] text-lg">Controversial</div>
        </div>
        
    )
}

export default TabsComp