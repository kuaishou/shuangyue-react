import { useState } from "react"
import store from "../../store"
const AboutFoo = () => {
    const [count, setCount] = useState(store.getState().counter.count)

    const handClick = () => {
        store.dispatch({
            type: 'counter/addCount'
        })

    }
    store.subscribe(() => {//更新页面
        setCount(store.getState().counter.count)
    })

    return <>
        <div>我是About的AboutFoo 模块</div>
        <h2>redux数字{count}</h2>
        <button onClick={handClick}>redux添加数字</button>
    </>
}

export default AboutFoo