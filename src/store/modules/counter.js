/**
 * 使用redux-toolkit改造redux状态管理
 * 
 */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0,
}
//redux异步处理方法
export const counterTestAction = createAsyncThunk('counter/testAction', async () => {
    const res = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(8)
        }, 2000)

    })
    return res
})
const counterSlice = createSlice({
    //dispath('counter/addCount')
    name: 'counter',
    initialState: {
        ...initialState,
        debuleCount: initialState.count * 2//模拟实现计算属性
    },
    reducers: {
        addCount(state, action) {
            const newcount = state.count + (action.payload ? action.payload : 1)
            state.count = newcount;
            state.debuleCount = newcount * 2
        }
    },
    extraReducers: builder => {
        builder.addCase(counterTestAction.fulfilled, (state, { payload }) => {
            const newcount = state.count + (payload ? payload : 1)
            state.count = newcount;
            state.debuleCount = newcount * 2
        })
    }
})

export default counterSlice.reducer


export const reduxCounterAddCount = () => {
    return (dispatch) => {//是tunk中间件回调默认传的dispatch
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                dispatch({
                    type: 'counter/addCount',
                    payload: 6
                })
                resolve('response data Success')
            }, 2000)

        })
    }
}

/**
 * 使用redux
 const counterReducer = (state = {
    count: 1,
    // debuleCount: 2
}, action) => {
    switch (action.type) {
        case 'counter/addCount':
            const newcount = state.count + (action.payload ? action.payload : 1)
            return {
                count: newcount,
                debuleCount: newcount * 2//模拟实现计算属性
            }
        default:
            state.debuleCount = state.count * 2
            return state;
    }
}

export const reduxCounterAddCount = () => {
    return (dispatch) => {//是tunk中间件回调默认传的dispatch
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                dispatch({
                    type: 'counter/addCount',
                    payload: 6
                })
                resolve('response data Success')
            }, 2000)

        })
    }
}




export default counterReducer
 */

