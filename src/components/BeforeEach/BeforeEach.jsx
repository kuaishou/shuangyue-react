
import { matchRoutes, useLocation, Navigate } from "react-router-dom"
import { routes } from "../../router/index"
import "./index.css"
const BeforeEach = (props) => {

    const loction = useLocation()
    const matchs = matchRoutes(routes, loction)
    console.log('BeforeEach变化了', matchs)
    const mate = matchs[matchs.length - 1].route.mate
    document.title = mate.title;

    if (mate.anth) {//权限管控

        return <Navigate to="/login"></Navigate>
    } else {
        return <>
            {props.children}
        </>
    }

}

export default BeforeEach