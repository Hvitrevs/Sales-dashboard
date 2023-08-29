import "./login.scss"
import React, { useEffect, useState } from "react"

import { useNavigate, Link } from "react-router-dom"


function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
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

              <h1>Signup</h1>

              <form className="formfield" action="POST">
                  <input className="forms" type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />

                  <input className="forms" type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />

                  <input className="button" type="submit" onClick={submit} />

              </form>
            

              <span className="backlink">
                <p>OR</p>
              </span>
              <div className="adminLink">

                  <Link to="/profile"> Get Back To Profile</Link>
              </div>
              
          </div>
          
          

        </div>
    )
}

export default Login