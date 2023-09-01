
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import "./login.scss";
import React, {  useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import axios from "axios";

import { useNavigate, Link } from "react-router-dom";
import { Google } from "@mui/icons-material";


function Login() {
    
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/login",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">
          <div className="layoutlogin">

              <h1>Authorization</h1>
              <h5>Welcome Back!</h5>

              <form className="formfield" action="/">
                  <input className="forms" type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder=" Enter your email"  />

                  <input className="forms" type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter your password" />

                  <Link to="/">
                  <button type="submit" onClick={() =>alert('Your credentials are invalid. Redirecting to Demo View. Click "OK to continue')}>Login</button></Link>

                  <hr></hr>
                  <span className="loginwith">Login with </span>
                  <div className="socialM">
                    <Google className="soc" onClick={() =>alert('Login was successfull')} />
                    <FacebookOutlinedIcon className="soc" onClick={() =>alert('Login was successfull')} />
                    <LinkedInIcon className="soc" onClick={() =>alert('Login was successfull')} />

                    
                  </div>

              </form>
            

              <span className="backlink">
                <p>OR</p>
              </span>
              <div className="adminLink">

                  <Link to="/"> Get Back To Demo View</Link>
              </div>
              
          </div>
          
          

        </div>
    )
}

export default Login