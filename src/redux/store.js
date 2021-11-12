import React from 'react'
import { reducer as formReducer } from 'redux-form'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import booksReducer from './reducers/booksReducer'
import thunk from 'redux-thunk'
import cartReducer from './reducers/cartReducer'


const reducers = combineReducers({
   form:  formReducer,
   books: booksReducer,
   cart: cartReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
