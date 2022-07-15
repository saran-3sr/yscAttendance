import React, { useEffect, useState } from 'react'
import NavbarBoot from '../component/Navbar'
import EventManager from '../component/EventManager'
import '../css/eventManager.css'
import Loader from '../component/Loader'
function Eventpage() { 
    
const ServerUrl="http://localhost:5000"

//useStates 
const [events, setEvents] = useState([])
const [inCompletedEvents, setInCompletedEvents] = useState([])
const [loadingEvents, setLoadingEvents] = useState(true)
const [loadingIncomplete, setLoadingIncomplete] = useState(true)


//useeffect for Server fetch
useEffect(() => {
  fetch(ServerUrl+'/attendance/listOfEvents')
.then(res=>res.json())
.then(data=>setEvents(data))
.finally(()=>setLoadingEvents(false))
}, [])
//
useEffect(() => {
  fetch(ServerUrl+'/attendance/unCompleted')
  .then(res=>res.json())
  .then(data=>setInCompletedEvents(data))
  .finally(()=>setLoadingIncomplete(false))
}, [])

  return (
    <div className="Eventpage">
    <NavbarBoot/>
    {(!loadingEvents && !loadingIncomplete)?<EventManager events={events} inCompletedEvents={inCompletedEvents}/>:<Loader/>}
    </div>
  )
}

export default Eventpage