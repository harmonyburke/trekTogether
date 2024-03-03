
const Login = () => {
    return ( 
        <section>
            <h2>Log In</h2>
            <form action="submit" id='login-form'>
                {/* Email input */}
                <input className='input'
                type="email" 
                placeholder='Email'
                required/> <br />
                {/* Password Input */}
                <input className='input'
                type="password"
                placeholder='Password'
                required /> <br />
                <button type='submit' id='login-signup-btn'>Login</button>
            </form>
        </section>
     );
}
 
export default Login;