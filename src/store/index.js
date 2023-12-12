/**
 * 使用redux-toolkit改造redux状态管理
 */
import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import counterReducer from './modules/counter'
import messageReducer from "./modules/message"

const persistConfig = {//持久化配置
    key: 'root',
    version: 1,
    storage,
}

const store = configureStore({
    reducer: {
        counter: persistReducer(persistConfig, counterReducer),//选择只持久化counter模块
        message: messageReducer
    },
    middleware: (getDefaultMiddleware) =>//持久化配置
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
persistStore(store)//持久化融合store

export default store









/**
import { createStore, combineReducers, applyMiddleware } from "redux"//已经废弃的方法createStore
import { composeWithDevTools } from "redux-devtools-extension"//数据流向查看
import {thunk} from 'redux-thunk'

// composeWithDevTools  redux状态管理模块化
import counterReducer from './modules/counter'
import messageReducer from "./modules/message"

const store = createStore(combineReducers({
    counter: counterReducer,
    message: messageReducer
}), composeWithDevTools(
    applyMiddleware(thunk)//添加处理异步操作的中间件thunk
))

export default store

 */








