
const SmallFlexComp = () => {
    return (
        <div className="flex justify-center items-center 2xl:w-full  w-[90%] gap-4 p-1">
            <div className="flex items-center justify-center w-full ">
                <div className="bg-[#EDE8E805] backdrop-blur-md w-[100%] rounded-md h-24 max-h-32 ml-1">
                    <div className="flex items-center justify-center gap-4 px-4 py-4 h-full">
                        <div className="rounded-full h-12 w-12 bg-[#EDE8E820] "></div>
                        <div className="flex items-end justify-center flex-col w-[80%] gap-2">
                            <p className="text-xs p-0 text-left" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus libero, saepe eligend</p>
                            <h3 className="text-xs text-pink-600/75"> UserName</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="2xl:flex items-center justify-center w-full hidden ">
                <div className="bg-[#EDE8E805] backdrop-blur-md w-[100%] rounded-md h-24 mr-1 ">
                <div className="flex items-center justify-center gap-4 px-4 py-4 h-full">
                        <div className="rounded-full h-12 w-12 bg-[#EDE8E820] "></div>
                        <div className="flex items-end justify-center flex-col w-[80%] gap-2">
                            <p className="text-xs p-0 text-left" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus libero, saepe eligend</p>
                            <h3 className="text-xs text-pink-600/75">UserName</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default SmallFlexComp