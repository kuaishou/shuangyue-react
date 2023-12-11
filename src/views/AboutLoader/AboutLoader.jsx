
import { useLoaderData } from "react-router-dom"
const AboutLoader = () => {
    const beforerouterData = useLoaderData()//获取loader传过来的用户信息
    console.log('loadername', beforerouterData.userName)
    return <>
        <h2>loader传到组件里面的用户信息{beforerouterData.userName}</h2>
    </>
}

export default AboutLoader