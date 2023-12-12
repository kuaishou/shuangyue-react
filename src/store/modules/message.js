/**
 * 使用redux-toolkit改造redux状态管理
 * 
 */
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    msg: 'hello word vent'
}



const messageSlice = createSlice({
    //dispath('counter/addCount')
    name: 'message',
    initialState: {
        ...initialState,
    },
    reducers: {
        change(state, action) {
            state.msg = action.payload
        }
    }
})

export default messageSlice.reducer




// const messageReducer = (state = {
//     msg: 'hello word vent'
// }, action) => {
//     switch (action.type) {
//         case 'message/change':
//             return { msg: action.payload }
//         default:
//             return state;
//     }

// }

// export default messageReducer