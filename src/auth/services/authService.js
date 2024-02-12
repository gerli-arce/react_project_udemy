export const loginUser = ({userLogin:{username, password}})=>{
    return (username === "admin" && password === "1234") ? true : false;
}