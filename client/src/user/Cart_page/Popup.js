import React from 'react'
import './Popup.css'
export default function Popup(props) {

  return (props.trigger) ?(
    <>

    <div className='popup'>
        <div className='popup-inner'>
            <button className='closs-btn' onClick={()=>props.setTrigger(false)}>close</button>
            { props.children } 
        </div>
    </div>
    </>
  ):"";
}
