import randomImg from '../utils/randomImg';
import  '../style/auth.css'

const Auth = () => {

    return ( 
    <section >
        <form style={{ backgroundImage: `url(${randomImg()})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} id='auth-container' className='login'>
            <button id='login' className='auth-btn' formAction='/login'>Login</button> <br />
            <button id='signup' className='auth-btn' formAction='/signup'>Sign Up</button>
        </form>
    </section>
    );
}
 
export default Auth;