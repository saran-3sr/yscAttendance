import React from 'react'
import '../css/loader.css'
function Loader() {
    console.log("called")
  return (
    <div className="loader">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader