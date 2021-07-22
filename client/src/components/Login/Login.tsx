const Login: React.FC = () => {
    return (
        <form className="Login__form">
            <h2 className="Login__title">Sign in</h2>
            <input className='Login__input' name='email' type='text' placeholder='Enter your Email...'/>
            <input className='Login__input' name='password' type='password' placeholder='Enter your Password...'/>
            <button className='Login__button' type='submit'>Login</button>
        </form>

    )
}
export default Login;