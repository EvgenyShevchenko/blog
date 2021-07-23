import {useEffect, useState} from "react";
import Header from "../Header/Header";

interface AuthFormProps {
    register: boolean
}

const AuthForm: React.FC<AuthFormProps> = ({register}) => {
    const[username,setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [usernameDirty,setUsernameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [usernameError, setUsernameError] = useState('Username не может быть пустым.')
    const [emailError, setEmailError] = useState('Email не может быть пустым.')
    const [passwordError, setPasswordError] = useState('Password не может быть пустым.')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const usernameHandler = (e:any) => {
        setUsername(e.target.value)
        if (e.target.value.length < 5 || e.target.value.length > 10) {
            setUsernameError('Username должен быть длиннее 5 меньше 10')
            if (!e.target.value) {
                setUsernameError('Username не может быть пустым.')
            }
        } else {
            setUsernameError('')
        }
    }

    const emailHandler = (e: any) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный email')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e: any) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 12) {
            setPasswordError('Пароль должен быть длиннее 3 меньше 12')
            if (!e.target.value) {
                setPasswordError('Password не может быть пустым.')
            }
        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (e: any) => {
        switch (e.target.name) {
            case 'username':
                setUsernameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    return (
        <div>
            <Header/>
            <form className="Login__form">
                <h2 className="Login__title">{!register ? 'Login' : 'Register'}</h2>
                {(usernameDirty && usernameError) && <div className='Login__error'>{usernameError}</div>}
                {register? <input value={username}
                       onChange={e => usernameHandler(e)}
                       onBlur={e => blurHandler(e)}
                       className='Login__input'
                       name='username'
                       type='text'
                       placeholder='Enter your Username...'/>:''}
                {(emailDirty && emailError) && <div className='Login__error'>{emailError}</div>}
                <input value={email}
                       onChange={e => emailHandler(e)}
                       onBlur={e => blurHandler(e)}
                       className='Login__input'
                       name='email'
                       type='text'
                       placeholder='Enter your Email...'/>
                {(passwordDirty && passwordError) && <div className='Login__error'>{passwordError}</div>}
                <input value={password}
                       onChange={e => passwordHandler(e)}
                       onBlur={(e) => blurHandler(e)}
                       className='Login__input'
                       name='password'
                       type='password'
                       placeholder='Enter your Password...'/>
                <button disabled={!formValid} className='Login__button' type='submit'>{!register ? 'Login' : 'Registration'}</button>
            </form>
        </div>
    )
}
export default AuthForm;