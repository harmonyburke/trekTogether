import randomImg from "../utils/randomImg";

const Login = () => {
    return ( 
        <section>
            <form action="submit" id='login-form' style={{ backgroundImage: `url(${randomImg()})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
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