const messageReducer = (state = {
    msg: 'hello word vent'
}, action) => {
    switch (action.type) {
        case 'message/change':
            return { msg: action.payload }
        default:
            return state;
    }

}

export default messageReducer