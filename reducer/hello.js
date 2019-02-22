export default function(state = {
  text: ''
}, action) {
  switch (action.type) {
    case 'HELLO': {
      return {
        ...state,
        text: action.text
      }
    }
    default: {
      return state
    }
  }
}