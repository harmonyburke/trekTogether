import { useState } from "react";
import { ADD_USER, LOGIN } from "../../utils/mutations";
import randomImg from "../utils/randomImg";

import { useMutation } from "@apollo/client";



const Login = (user) => {

    const loginUser=useMutation(LOGIN);

  const [email, setEmail] =useState(user.email);
  const [password, setPassword]= useState(user.password);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await loginUser({
                variables:{
                    email,
                    password
                }
            })
            console.log('Login!')
        } catch(err){
            console.error("Unable to login!", err)
        }
    }


    return ( 
        <section>
            <form action="submit" id='login-form' style={{ backgroundImage: `url(${randomImg()})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                {/* Email input */}
                <input className='input'
                type="email" 
                placeholder='Email' 
                required onChange={(e) => setEmail(e.target.value)}/> <br />
                {/* Password Input */}
                <input className='input'
                type="password"
                placeholder='Password'
                required onChange={(e) => setPassword(e.target.value)} /> <br />
                <button type='submit' id='login-signup-btn' onChange={handleSubmit}>Login</button>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </form>
        </section>
     );
}
 
export default Login;