import { createStore, combineReducers } from "redux"//已经废弃的方法
import { composeWithDevTools } from "redux-devtools-extension"//数据流向查看

// composeWithDevTools  redux状态管理模块化
import counterReducer from './modules/counter'
import messageReducer from "./modules/message"

const store = createStore(combineReducers({
    counter: counterReducer,
    message: messageReducer
}), composeWithDevTools())

export default store