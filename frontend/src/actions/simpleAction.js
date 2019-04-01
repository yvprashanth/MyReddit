
export const simpleAction = () => dispatch => {
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: 'Prashanth Yerramilli is the result'
    })
}

export const loadCategories = () => dispatch => {
    dispatch({
        type: 'LOAD_CATEGORIES',
        payload : ['udacity', 'redux', 'react']
    })
}