import { useDispatch, useSelector } from "react-redux"
import { reduxCounterAddCount, counterTestAction } from "../../store/modules/counter"
const AboutBar = () => {
    //获取state状态数据
    const count = useSelector(state => state.counter.count)
    const dublecount = useSelector(state => state.counter.debuleCount)
    const msg = useSelector(state => state.message.msg)

    //获取dispatch改变state的方法
    const dispatch = useDispatch()

    const handClick = () => {
        // dispatch({
        //     type: 'counter/addCount',
        //     payload: 5
        // })

        // dispatch(reduxCounterAddCount()).then((res) => {
        //     console.log(res)
        //     dispatch({
        //         type: 'message/change',
        //         payload: 'hi 邢浩东'
        //     })
        // })

        dispatch(counterTestAction()).then((res) => {
            console.log(res.payload)
            dispatch({
                type: 'message/change',
                payload: 'hi 邢浩东'
            })
        })
    }
    return <>
        <div>我是About的AboutBar 模块</div>
        <h2>redux加5的数字{count}----{dublecount}</h2>
        <h2>redux加message是{msg}</h2>
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