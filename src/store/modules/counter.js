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
export default counterReducer