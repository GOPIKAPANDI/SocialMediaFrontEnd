import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import { useState } from 'react'
import ProfileModal from '../ProfileModal/ProfileModal'

const InfoCard = () => { 
    const [modalOpened , setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
        <div className="infoHead">
            <h4>Your Info</h4> 
            <UilPen width="2rem" height="1.2rem" onClick={()=>setModalOpened(true)}/> 
            <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
        </div>
        <div className="info">
            <span>
                <b>Status</b> in Relationship
            </span>
            <span>
                <b>Lives</b> in Multan
            </span>
            <span>
                <b>Status</b> in Relationship
            </span>
        </div>
        <button className='button logout-button'>Log Out</button>
    </div>
  )
}

export default InfoCard