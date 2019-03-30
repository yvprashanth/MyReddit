export default (state = {}, action) => {
    debugger
    switch (action.type) {  
        case 'SIMPLE_ACTION':
          return {
            result: action.payload
          }
        default:
          return state
    }
}