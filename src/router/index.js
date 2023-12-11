import { createBrowserRouter } from "react-router-dom"

import App from "../App"
import Home from "../views/Home/Home"
import About from "../views/About/About"

//路由注册表

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />,
            }, {
                path: 'about',
                element: <About />,
            }
        ]
    }
]


const router = createBrowserRouter(routes)
export default router














