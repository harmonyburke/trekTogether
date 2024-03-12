
const Signup = () => {

    const imgStyle =  { 
        backgroundImage: `url(/images/img2.jpeg)`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat' }
    return ( 
        <section>
            <form id="signUp-container" action="/signup" style={imgStyle}>
            <br /><br /><br /><br /><br />
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
                <br /><br /><br /><br /><br />
            </form>
        </section>
     );
}
 
export default Signup;