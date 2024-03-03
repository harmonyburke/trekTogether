import '../style/auth.css'

const Auth = () => {
    return ( 
    <section className='auth-container'>
        <div className="login-container">
            <form action="/login" className='login'>
            <button id='login' className='auth-btn'>Login</button>
            </form>
        </div>
        <div className="signUp-container">
        <form action="/signup" className='signup'>
            <button id='signup' className='auth-btn'>Sign Up</button>
        </form>
        </div>
    </section>
    );
}
 
export default Auth;