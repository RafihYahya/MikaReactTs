import { Chats, Heart, Share, ThumbsDown, ThumbsUp } from "@phosphor-icons/react"
import { useState } from "react"

const PostComp = ({ keyid, prop, item }: any) => {
  const [TimeOutToggle, setTimeOutToggle] = useState([true, true, true])

  const FlipBetweenTextAndIconFalse = (j: number) => {
    let Temp = TimeOutToggle.map((e, i) => i == j ? true : e)
    setTimeout(() => {
      setTimeOutToggle(Temp)
    }, 500);
  }
  const setArrayTimeOutToggle = (j:number) => {
    let Temp =  TimeOutToggle.map((e, i) => i == j ? false : e)
    setTimeOutToggle(Temp);
  }

  let Prop = prop.data.post[item]
  return (
    <div className=" w-[93%] md:w-[90%] lg:w-[75%] lg:h-[33%] 2xl:min-h-[26%] 2xl:h-auto h-[35%] md:h-[24%]
          mx-auto rounded-md flex justify-between items-center lg:my-[10%] mt-[20%] mb-[30%] sm:mb-[50%] 
          md:mt-[20%] md:mb-[20%] md:p-4 md:mr-[7%] lg:mr-[18%] md:flex-row flex-col gap-4 md:gap-0">
      <div className=" md:w-[15%] md:h-full w-8 h-8 rounded-md m-2 flex items-center
            justify-between md:flex-col flex-row  ">
        <div className="lg:scale-105 2xl:scale-100 scale-100 bg-[#ede8e820] max-h-24
              lg:max-h-32 2xl:max-h-24 2xl:h-20 h-20 w-20 lg:w-16 2xl:w-20 md:block hidden 
             mb-2 rounded-full border-2 border-pink-600/75"></div>
        <div className=" h-full w-full flex justify-center items-center md:flex-col flex-row gap-32 md:gap-2 pb-6 sm:pb-0">
          <div onClick={() => {
            setArrayTimeOutToggle(0)
            ; FlipBetweenTextAndIconFalse(0)
          }}
            className="bg-[#ede8e815] backdrop-blur-md rounded-full w-20 h-20  sm:w-14 sm:h-14 
               flex justify-center items-center p-6 md:p-0 hover:text-pink-600/75
               transition-colors duration-300 ease-in-out">
            {!TimeOutToggle[0] ? <h4 className="text-center text-pink-600 text-2xl">{Prop.loveNum ?? '00'}</h4> : (window.innerWidth < 540 ? <Heart size={32} /> : <Heart size={28} />)}
          </div>
          <div onClick={() => {
            setArrayTimeOutToggle(1)
            ; FlipBetweenTextAndIconFalse(1)
          }}
            className="bg-[#ede8e815] backdrop-blur-md rounded-full w-20 h-20  sm:w-14 sm:h-14
                flex justify-center items-center p-6 md:p-0  hover:text-pink-600/75
                transition-colors duration-300 ease-in-out">
            {!TimeOutToggle[1] ? <h4 className="text-center text-pink-600 text-2xl">{Prop.loveNum ?? '00'}</h4> : (window.innerWidth < 540 ? <ThumbsUp size={32} /> : <ThumbsUp size={28} />)}
          </div>
          <div onClick={() => {
            setArrayTimeOutToggle(2)
            ; FlipBetweenTextAndIconFalse(2)
          }}
            className="bg-[#ede8e815] backdrop-blur-md rounded-full w-20 h-20  sm:w-14 sm:h-14
                flex justify-center items-center p-6 md:p-0 hover:text-pink-600/75
                transition-colors duration-300 ease-in-out">
            {!TimeOutToggle[2] ? <h4 className="text-center text-pink-600 text-2xl">{Prop.loveNum ?? '00'}</h4> : (window.innerWidth < 540 ? <ThumbsDown size={32} /> : <ThumbsDown size={28} />)}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center flex-col h-full w-full">
        <div className="bg-[#ede8e80a] backdrop-blur-md w-full 2xl:min-h-[20vh] h-full rounded-md overflow-auto
              mb-2 border-pink-600/75 border-t-2 ">
          <p className="text-left m-10 ">{Prop.post}</p>
        </div>
        <div className="w-full h-20 flex items-center justify-center gap-1">
          <div className="bg-[#ede8e805] w-full h-full 2xl:h-[80%] rounded-sm
                flex items-center justify-center border-2 border-pink-600/50 uppercase text-md lg:p-0 p-2">
            <div className="flex items-center justify-center gap-2 ">
              <Chats size={32} />
              <h2 >Comments</h2>
            </div></div>
          <div className="md:flex hidden bg-[#ede8e805] w-[40%] h-full 2xl:h-[80%] rounded-sm 
                items-center justify-center border-2 border-pink-600/50 uppercase text-md">
            <div className="flex items-center justify-center gap-2 ">
              <Share size={32} />
              <h2 >Share</h2>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default PostComp