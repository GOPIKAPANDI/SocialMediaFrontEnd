import React from 'react'
import Cover from 'D:/SOCIALMEDIA/SocialMedia-Starter/src/img/cover.jpg' 
import Profile from 'D:/SOCIALMEDIA/SocialMedia-Starter/src/img/profileImg.jpg' 
import './ProfileCard.css' 

const ProfileCard = () => {
  const ProfilePage = true;
  return (
    <div className='ProfileCard'> 
      <div className='ProfileImages'> 
          <img src={Cover} alt='coverImg'/>
          <img src={Profile} alt='profileImg'/>
      </div>
      <div className='ProfileName'> 
          <span>Zendaya MJ</span>
          <span>Senior UI/UX Designer</span>   
      </div>
      <div className='followStatus'> 
          <hr/>
          <div>
            <div className="follow">
              <span>6,866</span> 
              <span>Followers</span>
            </div>
            <div className="vl"></div>
            <div className='follow'>
              <span>1</span> 
              <span>Following</span>
            </div>
            {ProfilePage && 
                <>
                  <div className="vl"></div>
                  <div className="follow">
                    <span>3</span>
                    <span>Posts</span> 
                  </div>
                </>
            }
          </div>
          <hr/>
      </div> 
      {ProfilePage ? '' : 
         <span>
         My Profile
        </span>
      }
    </div>
  )
}

export default ProfileCard