import { BellRinging, Notification } from "@phosphor-icons/react"

const NotificationsCardComp = ({ props }: { props: string }) => {
  return (
    <div id="notifCard" className={`z-100 ${props} absolute  bg-[#EDE8E805] backdrop-blur-md border-b-2 border-t-2  border-pink-600/75 w-[35vw] 2xl:w-[30vw] h-[85vh] 2xl:h-[75vh] rounded-md left-[50%] top-[7%] flex items-center justify-between flex-col py-4 `}>
      <div className="flex justify-center items-center w-full p-4 flex-col gap-2 ">
        <div className="w-full h-20 backdrop-blur-md bg-[#EDE8E80a] rounded-md flex items-center justify-between p-4">
          <p className="2xl:w-[90%] w-[85%] text-sm"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum delectus minima illo corporis quos</p>
          <BellRinging className="text-pink-500/75" size={32} />


        </div>
        <div className="w-full h-20 backdrop-blur-md bg-[#EDE8E80a] rounded-md flex items-center justify-between p-4">
          <p className="2xl:w-[90%] w-[85%] text-sm"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum delectus minima illo corporis quos</p>
          <BellRinging className="text-pink-500/75" size={32} />


        </div>
        <div className="w-full h-20 backdrop-blur-md bg-[#EDE8E80a] rounded-md flex items-center justify-between p-4">
          <p className="2xl:w-[90%] w-[85%] text-sm"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum delectus minima illo corporis quos</p>
          <BellRinging className="text-pink-500/75" size={32} />


        </div>
        <div className="w-full h-20 backdrop-blur-md bg-[#EDE8E80a] rounded-md flex items-center justify-between p-4">
          <p className="2xl:w-[90%] w-[85%] text-sm"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum delectus minima illo corporis quos</p>
          <BellRinging className="text-pink-500/75" size={32} />


        </div>
      </div>
      <div className="flex items-center justify-between px-4 gap-4 cursor-pointer">

        <h1 className="uppercase 2xl:text-sm text-md text-pink-600/75 ">All Notifications</h1>
        <Notification className="text-pink-600/75" size={32} />

      </div>
    </div>
  )
}

export default NotificationsCardComp