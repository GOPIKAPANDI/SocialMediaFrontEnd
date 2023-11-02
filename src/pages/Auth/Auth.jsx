import React, { useState } from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import {useDispatch, useSelector} from 'react-redux' 
import { logIn, signUp } from '../../actions/AuthAction.js'

const Auth = () => { 
  const dispatch = useDispatch(); 
  const loading = useSelector((state)=>state.authReducer.loading); //to get loading symbol until auth is loading 
  const [isSignUp , setIsSignUp] = useState(false)  
  const [data , setData] = useState({firstname: "",lastname: "",username: "",password: "",confirmpass: ""}) 
  const [confirmPass , setConfirmPass] = useState(true);    
  
  console.log(loading);  
  const handleChange=(e)=>{ 
      // single common func for all  
      setData({...data ,[e.target.name]:e.target.value}) 
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if(isSignUp){
      data.password === data.confirmpass ? dispatch(signUp(data)) : setConfirmPass(false); 
    }
    else{
      dispatch(logIn(data)) 
    }
  }

  // To disappear "Confirm pw warning" in login form
  const resetForm = () =>{
    setConfirmPass(true);
    setData({firstname: "",lastname: "",username: "",password: "",confirmpass: ""});
  }

  return (
    <div className="Auth">

      {/* left side */}

        <div className="a-left">
            <img src={Logo} alt='logo'/>
            <div className='Webname'>
                <h1>GD-BE Media</h1> 
                <h6>Explore the ideas throughout the world</h6>

            </div>
        </div>

      {/* right side */}

        <div className="a-right">
          <form className="infoForm authForm" onSubmit={handleSubmit}> 
            <h3>{isSignUp ? "Register" : "LogIn"}</h3>  

            {isSignUp &&  
               <div>
                <input required type='text' placeholder='First Name' className='infoInput' name='firstname'onChange={handleChange} value={data.firstname}/>
                <input required type='text' placeholder='Last Name' className='infoInput' name='lastname' onChange={handleChange} value={data.lastname}/>
               </div>
            }  
            
            <div>
              <input required type="text" placeholder='Username' className="infoInput" name='username' onChange={handleChange} value={data.username}/>
            </div> 
            <div>
              <input required type='password' placeholder='Password' className='infoInput' name='password' onChange={handleChange} value={data.password}/>
              { 
                isSignUp &&           
                    <input type='password' placeholder='Confirm Password' className='infoInput' name='confirmpass'onChange={handleChange} value={data.confirmPass}/>
              }
            </div>

            <span style={{ display : confirmPass ? "none" : "block" , 
            color: "red",fontSize: '12px',alignSelf : "flex-end",marginRight : "5px"}}>

                *  Confirm password doesn't match  
            </span>
            
            <div> 
              <span style={{fontSize: '12px', cursor: 'pointer'}} onClick={ ()=>{setIsSignUp(!isSignUp); resetForm(); }}> 
                {isSignUp ? "Already have an account Login !" : "Don't have an account? Sign Up"} 
              </span>
            </div>
            <button className='button infoButton' type='submit' disabled={loading}>
              {loading? "Loading..." : isSignUp ? "Sign Up" : "Log In" }  
            </button> 
          </form>
        </div>
        {/* <SignUp/> */}
    </div>
  )
}


function SignUp(){
  return(
    <div className="a-right">
        <form className="infoForm authForm"> 
          <h3>Sign up</h3> 
          <div>
            <input type='text' placeholder='First Name' className='infoInput' name='firstname'/>
            <input type='text' placeholder='Last Name' className='infoInput' name='lastname'/>
          </div>
          <div>
            <input type="text" placeholder='Username' className="infoInput" name='username'/>
          </div>
          <div>
            <input type='text' placeholder='Password' className='infoInput' name='password'/>
            <input type='text' placeholder='Confirm Password' className='infoInput' name='confirmpw'/>
          </div>
          <div>
            <span style={{fontSize: '12px'}}>Already have an account Login !</span>
          </div>
          <button className='button infoButton' type='submit'>Sign Up</button>
        </form>
    </div>
  )
}


export default Auth