import { createBrowserRouter, createHashRouter } from "react-router-dom"

import App from "../App"
import Home from "../views/Home/Home"
import About from "../views/About/About"
import AboutFoo from "../views/AboutFoo/About"
import AboutBar from "../views/AboutBar/About"
import AboutDynamic from "../views/AboutDynamic/AboutDynamic"
import { Divider } from "antd"
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
                children: [
                    {
                        index:true,
                        element:<h3>默认路由显示默认的内容</h3>
                    }
                    ,
                    {
                        path: 'foo',
                        element: <AboutFoo />,
                    }, {
                        path: 'bar',
                        element: <AboutBar />,
                    }
                    , {
                        path: 'dynamic/:id',
                        element: <AboutDynamic />,
                    }
                ]
            }
        ]
    }
]


const router = createBrowserRouter(routes)//history模式
// const router = createHashRouter(routes)//hash模式
export default router




