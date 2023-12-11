import { Navigate, createBrowserRouter, createHashRouter, redirect } from "react-router-dom"
import BeforeEach from "../components/BeforeEach/BeforeEach"
import App from "../App"
import Home from "../views/Home/Home"
import About from "../views/About/About"
import AboutFoo from "../views/AboutFoo/About"
import AboutBar from "../views/AboutBar/About"
import AboutDynamic from "../views/AboutDynamic/AboutDynamic"
import AboutLoader from "../views/AboutLoader/AboutLoader"
import Login from "../views/Login/Login"

//路由注册表

export const routes = [
    {
        path: '/',
        element: <BeforeEach><App /></BeforeEach>,
        errorElement: <h1>我是404页面，找不到您的路由地址请重新进入</h1>,//页面错误捕获页面
        children: [

            {
                path: '',
                element: <Home />,
            },
            {
                path: 'login',
                element: <Login />,
                mate: { title: '登录', anth: false }
            }, {
                path: 'about',
                element: <About />,
                mate: { title: '关于', anth: false },
                children: [
                    {
                        index: true,
                        // element:<h3>默认路由显示默认的内容</h3>
                        element: <Navigate to='/about/dynamic/chanshu123'></Navigate>,//重定向
                        mate: { title: '关于', anth: false },
                    }
                    ,
                    {
                        path: 'loader',
                        element: <AboutLoader />,
                        mate: { title: '关于loader', anth: false },
                        loader: async () => {
                            const res = await new Promise((resolve, reject) => {
                                console.log('loader')
                                setTimeout(() => {
                                    const red = Math.random()
                                    console.log(red)
                                    resolve({ userName: '邢浩东', errorCode: red > 0.5 ? 0 : -1 })
                                }, 1000)
                            })
                            if (res.errorCode === 0) {
                                return res
                            } else {//跳转到登录页面
                                console.log('to--login')
                                return redirect('/login')
                            }

                        }
                    },
                    {
                        path: 'foo',
                        element: <AboutFoo />,
                        mate: { title: '关于foo', anth: false },
                    }, {
                        path: 'bar',
                        element: <AboutBar />,
                        mate: { title: '关于bar需要登录权限', anth: true },
                    }
                    , {
                        path: 'dynamic/:id',
                        element: <AboutDynamic />,
                        mate: { title: '关于dynamic', anth: false },
                    }
                    , {
                        path: '*',
                        element: <h1>我是about页面的404；about模块找不到对应的路由请查看</h1>,//页面错误捕获页面
                    }
                ]
            }
        ]
    }
]


const router = createBrowserRouter(routes)//history模式
// const router = createHashRouter(routes)//hash模式
export default router




