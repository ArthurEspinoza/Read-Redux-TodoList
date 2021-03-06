import { ADD_TODO, TOGGLE_TODO, SET_FILTER, GET_TODOS } from './actionTypes'
export const addTodo = (content) => {
    return{
        type: ADD_TODO,
        payload: content
    }
}
export const getTodos = () => {
    return{
        type: GET_TODOS
    }
}
export const toggleTodo = (id) => {
    return{
        type: TOGGLE_TODO,
        payload: id
    }
}
export const setFilter = (filter) => {
    return{
        type: SET_FILTER,
        payload: filter
    }
}