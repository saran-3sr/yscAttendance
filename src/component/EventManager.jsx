import React from 'react'

function EventManager(props) {
    const {events,inCompletedEvents}=props
    console.log(events,inCompletedEvents)
    console.log(events.docs)
    var CE=events.docs
    console.log(CE.filter(item=>item.Completed===true))
    const completedEvents=CE.filter(item=>item.Completed===true)

    const EventManagerView=(props)=>{
        const {eventProp}=props
        console.log(eventProp)
        return (
            <div className="EventManagerView">
                
            </div>
          )
    }
    return (
        
        <div className="EventManager Completed">
            {events.count>0 ? <EventManagerView eventProp={completedEvents}/>:
            <div className="errorEventPage">
            No events Added
        </div>}
        <div className="EventManager Incompleted">
            {inCompletedEvents.unCompletedCount>0 ? <EventManagerView eventProp={inCompletedEvents.docs}/> :
            <div className="errorEventPage">
            No Current Upcoming Events
        </div>}
        </div>
        </div>
      )
  
}

export default EventManager