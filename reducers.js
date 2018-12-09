export default function counter(state = {
  counter: 0,

}
  , action) {
  switch (action.type) {
    case 'INCREMENT':
     return Object.assign({}, state, {
        counter: state.counter + 1
      })
    case 'DECREMENT':
           return Object.assign({}, state, {
        counter: state.counter - 1
      })
    case 'APPLY_CHANGES':
          return Object.assign({}, state, {
        counter:state.counter+parseInt(action.text, 10)
      })
    default:
      return state
  }
}
