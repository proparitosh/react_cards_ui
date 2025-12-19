import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard= (props) => {

  return (
    <div className="h-full shrink-0 w-65 relative rounded-3xl overflow-hidden">
        <img className='object-cover h-full w-full' src={props.img}/>
       <RightCardContent id = {props.id} tag ={props.tag}/>
        </div>
  )
}

export default RightCard