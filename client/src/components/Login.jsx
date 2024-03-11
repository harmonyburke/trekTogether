const Login = () => {
    const imgStyle =  { 
    backgroundImage: `url(/images/img2.jpg)`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat' }

    return ( 
        <section>
            <form action="submit" id='login-form' style={imgStyle}>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
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
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </form>
        </section>
     );
}
 
export default Login;