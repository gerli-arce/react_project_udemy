export const loginUser = ({userLogin:{username, password}})=>{
    return (username === "admin" && password === "admin") ? true : false;
}