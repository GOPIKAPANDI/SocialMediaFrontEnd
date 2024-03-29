import React from 'react'
import './RightSide.css' 
import Home from '../../img/home.png'
import { UilSetting } from '@iconscout/react-unicons' 
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import TrendCard from '../TrendCard/TrendCard'
import { useState } from 'react'
import ShareModal from '../ShareModal/ShareModal'
import { Link } from 'react-router-dom'

const RightSide = () => {
  const [modalOpened , setModalOpened] = useState(false);
  return (
    <div className="RightSide">
        <div className='navIcons'> 
            <Link to='../home'><img src={Home} alt='home'/></Link> 
            <UilSetting/>
            <img src={Noti} alt='noti'/> 
            <img src={Comment} alt='comment'/> 
        </div> 
        <TrendCard/> 
        <button className='button r-button'
        onClick={()=>setModalOpened(true)}> 
        Share</button> 
        <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
    </div>
  )
}

export default RightSide