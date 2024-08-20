import {createStore} from 'redux'

const initialState = {
    counter: 0
}

const counterReducer = (state=initialState,action) => {
    return state
}

export const store = createStore(counterReducer)