import randomImg from "../utils/randomImg";

const Signup = () => {
    return ( 
        <section>
            <form id="signUp-container" action="/signup" style={{ backgroundImage: `url(${randomImg()})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                 {/* Name input */}
                 <input className='input'
                type="text"
                placeholder='Name'
                required /> <br />
                <input className='input'
                type="email" 
                placeholder='Email'
                required/> <br />
                {/* Password Input */}
                <input className='input'
                type="password"
                placeholder='Password'
                required /> <br />
                <button type='submit' id='login-signup-btn'>Sign Up</button>
            </form>
        </section>
     );
}
 
export default Signup;