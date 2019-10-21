
export const initialState = [
    {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
    }
]



export function todoReducer (state, action) {
    switch(action.type) {
        case "ADD_TODO": 
            return [
                ...state,
                action.payload
            ];
        case "TOGGLE_COMPLETED":
            return state.map((item) => item.id === action.payload ? {...item, completed: !item.completed} : item)
        case "CLEAR_COMPLETED":
            return state.filter((item)=> item.completed !== true);
        default:
            return state
    }
}