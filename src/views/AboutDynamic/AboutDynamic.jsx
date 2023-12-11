import { useParams } from "react-router-dom"

const AboutDynamic = () => {
    const param = useParams()
    return <>
        <div>我是About的动态路模块</div>
        <h2>链接中的动态参数：{param.id}</h2>
    </>
}

export default AboutDynamic