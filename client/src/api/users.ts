import {axiosUser} from "./api";

interface LoginUser {
    password: string
    email: string
}

interface CreateUser extends LoginUser {
    username?: string
}

export const registerUser = async (userData: CreateUser) => {
    try {
        await axiosUser.post('/users', {user: {...userData}})
        await login(userData)
    } catch (e) {
        console.log(e)
    }
}

export const login = async (userData: LoginUser) => {
    try {
        const token = (await axiosUser.post("/users/login", {user: {...userData}})).data.user.token;
        localStorage.setItem("auth", token);
        return token;
    } catch (e) {
        console.log(e);
    }
}

export const getUser = async () => {
    try {
        const token = localStorage.getItem("auth");
        const user = await (
            await axiosUser.get("/user", {headers: {Authorization: "Bearer " + token}})
        ).data.user;
        return user;
    } catch (error) {
        console.log(error);
    }
};