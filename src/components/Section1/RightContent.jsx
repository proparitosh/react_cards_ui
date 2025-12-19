import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full flex flex-nowrap overflow-x-auto gap-5  w-2/3 mb-15 p-6'>
      {props.users.map(function(elem, ixid){
        return <RightCard key = {ixid} id={ixid+1} tag = {elem.tag} img={elem.img}/>
      })}
    </div>
  )
}

export default RightContent