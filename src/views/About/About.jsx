
import { Link, NavLink, Outlet, useNavigate, useLocation, useSearchParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Button } from 'antd';
import "./index.css"
const About = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const navigator = useNavigate()
    const handClick1 = () => {
        navigator('/about/foo')
    }
    const handClick2 = () => {
        // setSearchParams({ name: 'xinghao' })
        navigator('/about/bar')

    }
    const handClick3 = () => {
        console.log('/about/loader')
        navigator('/about/loader')

    }
    const loction = useLocation()
    console.log('useLocation', loction)

    console.log('useSearchParams', searchParams.get('name'))


    //获取dispatch改变state的方法
    const dispatch = useDispatch()

    const handClick = () => {
        dispatch({
            type: 'addCount',
            payload: 8
        })
    }

    return <>
        <h1>我是About 模块</h1>
        <Link to='/about/foo'>About的foo模块</Link>|||||
        <Link to='/about/bar'>About的bar模块</Link>
        {/* 动态路由 */}
        <h2>
            <Link to='/about/dynamic/chanshu123'>About的动态模块参数123</Link>|||||
            <Link to='/about/dynamic/chanshu456'>About的动态模块参数456</Link>
        </h2>

        <h2>
            <NavLink to='/about/dynamic/NavLink111'>NavLink 的动态模块参数111</NavLink>|||||
            <NavLink to='/about/dynamic/NavLink222'>NavLink 的动态模块参数222</NavLink>
        </h2>

        <h2>
            <Button type="primary" onClick={handClick1}>编程式路由foo</Button>
            <Button onClick={handClick2}>编程式路由bar</Button>
            <Button onClick={handClick3}>编程式路由loader</Button>
        </h2>

        <div><Button onClick={handClick}>redux+8的按钮</Button></div>


        <Outlet />
    </>
}

export default About