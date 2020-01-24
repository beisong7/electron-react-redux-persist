import { combineReducers } from 'redux'
import postReducer from './postReducer.js'

// const rootReducer = ()=>{} 

export default combineReducers({
    posts: postReducer
})