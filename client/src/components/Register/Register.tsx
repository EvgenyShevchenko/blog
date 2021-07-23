import AuthForm from "../AuthForm/AuthForm";
import {useState} from "react";


const Register:React.FC = () => {
const [register,setRegister] = useState<any>(true)

    return(
        <div className="Register">
            <AuthForm register={register}/>
        </div>
    )
}
export default Register;