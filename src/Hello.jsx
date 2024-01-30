import PropTypes from "prop-types";
import {Head} from './components/head';
import {Title} from "./components/Title";
import {UserDetails} from "./components/UserDetails";
export const Hello = ({user, id, title, head})=>{
    console.log(user);

    return (
        <>
            <Title title={title}/>
            <UserDetails user={user} id={id}/>
            <Head head={head}/>
        </>
    )
}

Hello.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
}

Hello.defaultProps={
    title: "Hola Mundo",
    id: 1,
    user: {name: "Juan", lastname: "Perez"},
    head: "El libro de la selv",
}