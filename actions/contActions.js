export default function (dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER', data: 5 }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' })
    }
}