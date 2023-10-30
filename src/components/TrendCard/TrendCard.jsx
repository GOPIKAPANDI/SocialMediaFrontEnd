import React from 'react'
import './TrendCard.css' 
import { TrendData } from '../../Data/TrendData'

const TrendCard = () => {
  return (
    <div className="TrendCard">
        <h3>Trends for your</h3> 
        {TrendData.map((trend,id)=>{
            return(
                <div className='trend'>
                    <span>#{trend.name}</span> 
                    <span>{trend.shares}k Shares</span>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCard