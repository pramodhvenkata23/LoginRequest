
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Input,Button, Container } from 'reactstrap'
import { postUserAction } from '../actions/usersaction'
import '../App.css'

const Login = (props) =>{

 const [username, setUsername] = useState('')   
 const [password, setPassword] = useState('')  

 const responseToken = useSelector(state => state.fetchToken);
 const authToken = responseToken.token?.data?.token 
 const loginStatus = responseToken.loginSuccess

 const history = useHistory();

 const dis = useDispatch();
 
 const onLoginClick = () =>{
     if(username !== '' && password !== ''){
       return dis(postUserAction(username,password))            
     }
    else{
        alert("enter username and password")

    }  
 }
useEffect(()=>{
    if (authToken == "QpwL5tke4Pnpja7X4"){
        history.push("/home",{username:username})
    }
    else if(loginStatus == false){
        alert("Please enter valid username and password");
        setUsername('');
        setPassword('')
    }
    else{
        history.push('/')
    }
},[authToken,loginStatus])

debugger;
    return( 
        <Container fluid >
             <h3 style={{marginTop:'30px', color:'red'}}>Please click login</h3>
        <div className='container_login' >
            <form>
                <label style={{marginRight:'130px',fontWeight:'bold'}}>Username</label>
                <Input type = "text" className = 'login-input'
                    onChange = {(e)=>{setUsername(e.target.value)}} 
                    value = {username}/>
                <label  style={{marginRight:'130px',fontWeight:'bold'}}>Password</label>
                <Input type = "password" className = 'login-input'
                    onChange = {(e)=>{setPassword(e.target.value)}} 
                    value = {password}/><br/>
                <Button type='button'
                    onClick={onLoginClick}>Login</Button>


            </form>

        </div>
        </Container>
    )
}


export default Login;