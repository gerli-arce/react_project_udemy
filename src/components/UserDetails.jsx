export const UserDetails = ({user, id})=>{
console.log(user)

return(
    <div>
        que tal! {user.name} {user.lastname} con el id ( {id} )
    </div>)
}