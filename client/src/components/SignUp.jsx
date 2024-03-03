
const Signup = () => {
    return ( 
        <section>
            <h2>Sign Up</h2>
            <form action="/login">
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