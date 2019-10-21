import React from 'react'

export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}



export function reducer (state, action) {
    switch(action.type) {
        case "UPDATE_TODO": 
            return [
                ...state,
                action.payload
            ]
        case "TOGGLE_COMPLETED":
            return {
                ...state,
                completed: !state.completed
            }
        default:
            return state
    }
}