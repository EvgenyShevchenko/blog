import AuthForm from "../AuthForm/AuthForm";
import {useState} from "react";
import {registerUser,login} from "../../api/users";



const Register:React.FC = () => {
const [register,setRegister] = useState<any>(true)

    return(
        <div className="Register">
            <AuthForm register={register}
                      registerUser={registerUser}
                      login={login}
            />
        </div>
    )
}
export default Register;