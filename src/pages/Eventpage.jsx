import React, { useEffect, useState } from 'react'
import NavbarBoot from '../component/Navbar'
import EventManager from '../component/EventManager'
import '../css/eventManager.css'
import Loader from '../component/Loader'
import { Button} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import CreateIcon from '@mui/icons-material/Create';
function Eventpage() { 
    
const ServerUrl="http://localhost:5000"

//useStates 
const [events, setEvents] = useState([])
const [inCompletedEvents, setInCompletedEvents] = useState([])
const [loadingEvents, setLoadingEvents] = useState(true)
const [loadingIncomplete, setLoadingIncomplete] = useState(true)


//useeffect for Server fetch
useEffect(() => {
  if(loadingEvents)
  {
    fetch(ServerUrl+'/attendance/listOfEvents')
    .then(res=>res.json())
    .then(data=>setEvents(data))
    .finally(()=>setLoadingEvents(false))
  }
}, [loadingEvents])
//
useEffect(() => {
  if(loadingIncomplete)
  {
    fetch(ServerUrl+'/attendance/unCompleted')
  .then(res=>res.json())
  .then(data=>setInCompletedEvents(data))
  .finally(()=>setLoadingIncomplete(false))
  }
}, [loadingIncomplete])

  return (
    <div className="Eventpage">
    <NavbarBoot/>
    <div className="createEvent">
      <div className="createEventButton">
        <Button variant='outlined' startIcon={<AddIcon/>}> Create </Button>
      </div>
      <div className="createEventButton">
        <Button variant='outlined' startIcon={<CreateIcon/>}>Edit</Button>      </div>
      </div>
    {(!loadingEvents && !loadingIncomplete)?<EventManager events={events} inCompletedEvents={inCompletedEvents}/>:<Loader/>}
    </div>
  )
}

export default Eventpage