import React from 'react'
import EventIcon from '@mui/icons-material/Event';
import NavbarBoot from '../component/Navbar';
import '../css/homeDash.css'
import PercentIcon from '@mui/icons-material/Percent';
function Homepage() {
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
                <p className="totalNumber">36</p>
            </div>
            <div className="totalNumberDet">
            <div className="totalNumberSub left">
                <p className='totalText'>Completed</p>
                <p className='totalNumber'>34</p>   
            </div>
            <div className="totalNumberSub">
                <p className='totalText'>Upcoming</p>
                <p className='totalNumber'>34</p>
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