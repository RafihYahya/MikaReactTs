import { Chats, Check, Heart, PencilSimple, Share, ThumbsDown, ThumbsUp, X } from "@phosphor-icons/react"
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { ApiInfo } from "../ConstantsGlobal"

const PostComp = ({ keyid, prop, setprops, item }: any) => {

  const [TimeOutToggle, setTimeOutToggle] = useState([true, true, true]);
  const [Prop, setProp] = useState({ Props: prop.data.post[item], Active: [false, false, false] });
  const [ModifyToggler, setModifyToggler] = useState(false);
  const [InputModifyValue, setInputModifyValue] = useState('');

  const mainPRef = useRef<any>(null);

  const appendImg = (Imgsrc: string) => {
    const mainText = mainPRef.current;
    const node = document.createElement("img");

    node.src = Prop.Props.post == 'hello' ? Imgsrc : 'https://i.pcmag.com/imagery/reviews/01t4MiDJEWvQCjdQPTkR0l1-3.fit_scale.size_760x427.v1571362059.jpg'
    node.width = 500;
    node.height = 300;
    node.style.objectFit = "cover";

    mainText?.appendChild(node);
  }

  useEffect(() => {
    //appendImg('https://i.pcmag.com/imagery/reviews/01t4MiDJEWvQCjdQPTkR0l1-3.fit_scale.size_760x427.v1571362059.jpg');
  }, [])





  const FlipBetweenTextAndIconFalse = (j: number) => {
    let Temp = TimeOutToggle.map((e, i) => i == j ? true : e)
    setTimeout(() => {
      setTimeOutToggle(Temp)
    }, 500);
  }
  const setArrayTimeOutToggle = (j: number) => {
    let Temp = TimeOutToggle.map((e, i) => i == j ? false : e)
    setTimeOutToggle(Temp);
  }

  ////////////////////////////////////////////////////////////////

  const deletePostApiRequest = async () => {
    await axios.delete(`${ApiInfo.server}:${ApiInfo.port}/api/post/delete/${Prop.Props.id}`).then(response => {
      console.log(response.data)
    }).catch(e => console.log(e.response))
    setprops(
      {
        data:
        {
          ...prop.data, post: Object.keys(prop.data.post).filter((e) => prop.data.post[e].id != Prop.Props.id).map((e) => prop.data.post[e])
        }
      })
  }

  const modifyPostApiRequest = async (body: string) => {
    console.log(body)
    const form = new FormData();
    form.append('body', body);
    form.append('_method', 'put');
    await axios.post(`${ApiInfo.server}:${ApiInfo.port}/api/post/update/${Prop.Props.id}`, form).then(response => {
      console.log(response.data)
    }).catch(e => console.log(e.response));
    setProp({ ...Prop, Props: { ...Prop.Props, post: InputModifyValue } })
    setModifyToggler(!ModifyToggler);

  }

  /////////////////////////////////////////////////////////////////

  const loveIncreaseApiRequest = async (j: number) => {
    if (!Prop.Active[j]) {
      await axios.post(`${ApiInfo.server}:${ApiInfo.port}/api/post/love/${Prop.Props.id}`).then(response => {
        console.log(response.data)
      }).catch(e => console.log(e.response))
      setProp({
        ...Prop, Props: { ...Prop.Props, loveNum: (Prop.Props.loveNum + 1) },
        Active: Prop.Active.map((_e, i) => i == j ? true : Prop.Active[i])
      });
    }
  }
  const likeIncreaseApiRequest = async (j: number) => {
    if (!Prop.Active[j]) {
      await axios.post(`${ApiInfo.server}:${ApiInfo.port}/api/post/like/${Prop.Props.id}`).then(response => {
        console.log(response.data)
      }).catch(e => console.log(e.response))
      setProp({
        ...Prop, Props: { ...Prop.Props, likeNum: (Prop.Props.likeNum + 1) },
        Active: Prop.Active.map((_e, i) => (i == j) ? true : (Prop.Active[i]))
      });
    }
  }
  const dislikeIncreaseApiRequest = async (j: number) => {
    if (!Prop.Active[j]) {
      await axios.post(`${ApiInfo.server}:${ApiInfo.port}/api/post/dislike/${Prop.Props.id}`).then(response => {
        console.log(response.data)
      }).catch(e => console.log(e.response))
      setProp({
        ...Prop, Props: { ...Prop.Props, dislikeNum: (Prop.Props.dislikeNum + 1) },
        Active: Prop.Active.map((_e, i) => i == j ? true : (Prop.Active[i]))
      });
    }
  }

  return (
    <div id='mainPostDiv' className=" w-[93%] md:w-[90%] lg:w-[75%] lg:h-[33%] 2xl:min-h-[26%] 2xl:h-auto h-[35%] md:h-[24%]
          mx-auto rounded-md flex justify-between items-center lg:my-[1%] mt-[20%] mb-[30%] sm:mb-[50%] 
          md:mt-[20%] md:mb-[20%] md:p-4 md:mr-[7%] lg:mr-[18%] md:flex-row flex-col gap-4 md:gap-0 
          transition-all duration-300 ease-in-out ">
      <div className=" md:w-[15%] md:h-full w-8 h-8 rounded-md m-2 flex items-center
            justify-between md:flex-col flex-row  ">
        <div className="lg:scale-105 2xl:scale-100 scale-100 bg-[#ede8e820] max-h-24
              lg:max-h-32 2xl:max-h-24 2xl:h-20 h-20 w-20 lg:w-16 2xl:w-20 md:block hidden 
             mb-2 rounded-full border-2 border-pink-600/75"></div>
        <div className=" h-full w-full flex justify-center items-center md:flex-col flex-row gap-32 md:gap-2 pb-6 sm:pb-0">
          <div onClick={() => {
            loveIncreaseApiRequest(0);
            setArrayTimeOutToggle(0)
              ; FlipBetweenTextAndIconFalse(0)
          }}
            className={`bg-[#ede8e815] backdrop-blur-md rounded-full w-20 h-20  sm:w-14 sm:h-14 
               flex justify-center items-center p-6 md:p-0 hover:text-pink-600/75 cursor-pointer ${Prop.Active[0] ? "text-pink-600/75" : ''} ${Prop.Active[2] ? "cursor-none pointer-events-none text-gray-400/30 " : ""}
               transition-colors duration-300 ease-in-out `}>
            {!TimeOutToggle[0] ? <h4 className="text-center text-pink-600 text-xl">{Prop.Props.loveNum ?? '00'}</h4> : (window.innerWidth < 540 ? <Heart size={32} /> : <Heart size={28} />)}
          </div>
          <div onClick={() => {
            likeIncreaseApiRequest(1);
            setArrayTimeOutToggle(1);
            ; FlipBetweenTextAndIconFalse(1);

          }}
            className={`bg-[#ede8e815] backdrop-blur-md rounded-full w-20 h-20  sm:w-14 sm:h-14
                flex justify-center items-center p-6 md:p-0  hover:text-pink-600/75 cursor-pointer ${Prop.Active[1] ? "text-pink-600/75" : ''} ${Prop.Active[2] ? "cursor-none pointer-events-none text-gray-400/30 " : ""}
                transition-colors duration-300 ease-in-out`}>
            {!TimeOutToggle[1] ? <h4 className="text-center text-pink-600 text-xl">{Prop.Props.likeNum ?? '00'}</h4> : (window.innerWidth < 540 ? <ThumbsUp size={32} /> : <ThumbsUp size={28} />)}
          </div>
          <div
            onClick={() => {
              dislikeIncreaseApiRequest(2);
              setArrayTimeOutToggle(2)
                ; FlipBetweenTextAndIconFalse(2)
            }}
            className={`bg-[#ede8e815] backdrop-blur-md rounded-full w-20 h-20  sm:w-14 sm:h-14
                flex justify-center items-center p-6 md:p-0 hover:text-pink-600/75 cursor-pointer ${Prop.Active[2] ? "text-pink-600/75" : ''} ${Prop.Active[1] ? "pointer-events-none text-gray-400/30 " : ""} ${Prop.Active[0] ? "cursor-none pointer-events-none text-gray-400/30 " : ""}
                transition-colors duration-300 ease-in-out`}>
            {!TimeOutToggle[2] ? <h4 className="text-center text-pink-600 text-xl">{Prop.Props.dislikeNum ?? '00'}</h4> : (window.innerWidth < 540 ? <ThumbsDown size={32} /> : <ThumbsDown size={28} />)}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center flex-col h-full w-full relative ">
        <div onClick={() => deletePostApiRequest()} className={`absolute right-0 p-4  hover:text-red-500 z-[200] cursor-pointer ${Prop.Props.user_id == localStorage.getItem('User') ? 'block' : 'hidden'}`}> <X size={28} /></div>
        <div onClick={() => { setModifyToggler(!ModifyToggler); setInputModifyValue(Prop.Props.post) }} className={`absolute right-0 top-[15%] p-4 ${ModifyToggler ? 'text-orange-500' : ''} hover:text-orange-500/75 z-[200] cursor-pointer ${Prop.Props.user_id == localStorage.getItem('User') ? 'block' : 'hidden'}`}> <PencilSimple size={28} /></div>
        <div onClick={() => modifyPostApiRequest(InputModifyValue)} className={`absolute right-0 top-[30%] p-4  hover:text-green-500 z-[200] cursor-pointer ${ModifyToggler ? 'block' : 'hidden'}`}> <Check size={32} /></div>

        <div className="bg-[#ede8e80a] backdrop-blur-md w-full 2xl:min-h-[20vh] h-full rounded-md overflow-auto
              mb-2 border-pink-600/75 border-t-2  ">
          {!ModifyToggler ? <p ref={mainPRef} id='mainPostText' className="text-left m-10 ">{Prop.Props.post}</p> : <textarea ref={mainPRef} id='mainPostText' className="bg-transparent backdrop-blur-md rounded-md h-[18vh] w-[85%] text-left m-10 p-6 " placeholder="Please Type Something ..." value={InputModifyValue} onChange={(e) => setInputModifyValue(e.target.value)} />}
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