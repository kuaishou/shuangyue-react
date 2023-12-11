import { createStore } from "redux"//已经废弃的方法
import { composeWithDevTools } from "redux-devtools-extension"//数据流向查看

const counterReducer = (state = {
    count: 1
}, action ) => {
    switch (action.type) {
        case 'addCount':
            return { count: state.count + 1 }
        default:
            return state;
    }

}

const store = createStore(counterReducer, composeWithDevTools())

export default store