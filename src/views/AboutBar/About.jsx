import { useDispatch, useSelector } from "react-redux"
const AboutBar = () => {
    //获取state状态数据
    const count = useSelector(state => state.count)

    //获取dispatch改变state的方法
    const dispatch = useDispatch()

    const handClick = () => {
        dispatch({
            type: 'addCount',
            payload: 5
        })
    }
    return <>
        <div>我是About的AboutBar 模块</div>
        <h2>redux加5的数字{count}</h2>
        <button onClick={handClick}>redux添加5数字</button>
    </>
}

export default AboutBar















// import { useState } from "react"
// import store from "../../store"

// const AboutBar = () => {
//     const [count, setCount] = useState(store.getState().count)

//     const handClick = () => {
//         store.dispatch({
//             type: 'addCount'
//         })

//     }
//     store.subscribe(() => {//更新页面
//         setCount(store.getState().count)
//     })

//     return <>
//         <div>我是About的AboutBar 模块</div>
//         <h2>redux数字{count}</h2>
//         <button onClick={handClick}>redux添加数字</button>
//     </>
// }

// export default AboutBar