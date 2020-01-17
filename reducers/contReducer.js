const initialState = {
    counter: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE_COUNTER':
            return { counter: state.counter + action.data }
        case 'DECREASE_COUNTER':
            return { counter: state.counter - 1 }
    }
    return state;
}