
import { Link, NavLink, Outlet, useNavigate,useLocation ,useSearchParams} from "react-router-dom"
import { Button } from 'antd';
import "./index.css"
const About = () => {
    const [searchParams,setSearchParams]=useSearchParams()
    const navigator = useNavigate()
    const handClick1 = () => {
        navigator('/about/foo')
    }
    const handClick2 = () => {
        setSearchParams({name:'xinghao'})
        navigator('/about/bar')
       
    }
    const loction=useLocation()
    console.log('useLocation',loction)
   
    console.log('useSearchParams',searchParams.get('name'))
    
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
        </h2>

        <Outlet />
    </>
}

export default About