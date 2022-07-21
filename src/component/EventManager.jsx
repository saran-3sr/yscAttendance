import React, { useMemo } from 'react'
import {useTable} from 'react-table'
import '../css/eventManager.css'
function EventManager(props) {
    const {events,inCompletedEvents}=props
    var CE=events.docs
    const completedEvents=CE.filter(item=>item.Completed===true)
    console.log(completedEvents)
    const EventManagerView=(props)=>{
        const {data,columns}=props
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
          } = useTable({
            columns,
            data,
          })
            return (
                <table {...getTableProps()}>
                  <thead>
                    {headerGroups.map(headerGroup => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                          <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                      prepareRow(row)
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                          })}
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              )
    }
        
    // 
    const columns = React.useMemo(
        () => [
            {
                Header: 'Event Name',
                accessor:'eventName',
            },
            {
                Header: 'Event Type',
                accessor:'type'
            },
            {
                Header: 'Event Date',
                accessor:'eventDate'
            }
        ]
      )

      const dataCompleted = React.useMemo(() => completedEvents,[events])
      const dataUnCompleted = React.useMemo(() => inCompletedEvents.docs,[events])

      ////    
    return (
        <div className="eventTablesView">
            <div className="eventTable completed">
                <p className="eventHeading">
                    Completed Events
                </p>
                <EventManagerView columns={columns} data={dataCompleted}/>
            </div>
            <hr className='lineEvent'/>
            <div className="eventTable unCompleted">
                <p className="eventHeading">
                    Upcoming Events Events
                </p>
                <EventManagerView columns={columns} data={dataUnCompleted}/>
            </div>
        </div>
      )
  
}

export default EventManager


{/* <div>
<div className="EventManager completed">
    <p className="eventHeading">
        Completed Events
    </p>
    <table>
        <thead>
            <tr>
                <th className='tableName'>Event Name</th>
                <th className='tableEvent'>Event Type</th>
                <th className='tableDate'>Event Date</th>
            </tr>
        </thead>
        <tbody>
            {events.count>0 ? completedEvents.map(event=><EventManagerView event={event}/>):
            <div className="errorEventPage">
            No events Added
            </div>}
        </tbody>
    </table>
</div>
<div className="EventManager Incompleted">
<p className="eventHeading">
    Uncompleted Events
</p>
<table>
        <thead>
            <tr>
                <th className='tableName'>Event Name</th>
                <th className='tableEvent'>Event Type</th>
                <th className='tableDate'>Event Date</th>
            </tr>
        </thead>
    {inCompletedEvents.unCompletedCount>0 ? inCompletedEvents.docs.map(event=><EventManagerView event={event}/>) :
        <div className="errorEventPage">
        No Current Upcoming Events
        </div>}
    </table>
</div>
</div> */}

{/* <tr>
<td className='eventName'>
    {event.eventName}
</td>
<td className='eventType'>
    {event.type}
</td>
<td className='eventDate'>
    {event.eventDate}
</td>
</tr>
) */}