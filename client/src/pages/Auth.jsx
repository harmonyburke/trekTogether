import  '../style/auth.css'

const Auth = () => {

    const imgStyle =  { 
        backgroundImage: 'url(/images/img4.webp)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat' }

    return ( 
    <section >
        <form style={imgStyle} id='auth-container' className='login'>
            <button id='login' className='auth-btn' formAction='/login'>Login</button> <br />
            <button id='signup' className='auth-btn' formAction='/signup'>Sign Up</button>
        </form>
    </section>
    );
}
 
export default Auth;