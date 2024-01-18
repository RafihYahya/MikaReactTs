import  { useState } from 'react'

const TestingToolbarCardComp = () => {
    const [NotifToggler, setNotifToggler] = useState('hidden');
    const [SearchToggler, setSearchToggler] = useState('hidden');
  
    
    const toggleSearch = (e:boolean) => {
      !e? setSearchToggler("block") : setSearchToggler("hidden");
      if(NotifToggler == 'block'){
        setNotifToggler('hidden')
      }
    }
  
    const toggleNotif3 = (e:boolean) => {
      !e? setNotifToggler("block") : setNotifToggler("hidden");
      if(SearchToggler == 'block'){
        setSearchToggler('hidden')
  
      }
    }
}

export default TestingToolbarCardComp