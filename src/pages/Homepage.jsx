import React, { useState } from 'react'
import EventIcon from '@mui/icons-material/Event';
import NavbarBoot from '../component/Navbar';
import '../css/homeDash.css'
import PercentIcon from '@mui/icons-material/Percent';
import { useEffect } from 'react';
function Homepage() {
    const ServerUrl="http://localhost:5000"

    //useStates 
    const [events, setEvents] = useState([])
    const [inCompletedEvents, setInCompletedEvents] = useState([])
    
    //useeffect for Server fetch
    useEffect(() => {
      fetch(ServerUrl+'/attendance/listOfEvents')
    .then(res=>res.json())
    .then(data=>setEvents(data))
    }, [])
    //
    useEffect(() => {
      fetch(ServerUrl+'/attendance/unCompleted')
      .then(res=>res.json())
      .then(data=>setInCompletedEvents(data))
    }, [])
    
    
  return (
    <div className="Homepage">
        <NavbarBoot/>
        <div className="salutation">
            WELCOME!
        </div>
        <div className="card eventsNo">
            <div className="cardTitle">
                <EventIcon/>
                Events
            </div>
            <div className="total">
                <p className="totalText">
                    Total No of Events
                </p>
                <p className="totalNumber">{events.count}</p>
            </div>
            <div className="totalNumberDet">
            <div className="totalNumberSub left">
                <p className='totalText'>Completed</p>
                <p className='totalNumber'>{events.count-inCompletedEvents.unCompletedCount}</p>   
            </div>
            <div className="totalNumberSub">
                <p className='totalText'>Upcoming</p>
                <p className='totalNumber'>{inCompletedEvents.unCompletedCount}</p>
            </div>
            </div>            
        </div>
        <div className="card AttendanceNo">
            <div className="cardTitle">
                <PercentIcon/>
                Attendance
            </div>
            <div className="total">
                <p className="totalText">
                    Attendance
                </p>
                <p className="totalNumber">96%</p>
            </div>            
        </div>
    </div>
  )
}

export default Homepage