import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
/// importar Reducers

import mainReducers from './reducers'

// const initialState = {} // InitialState puede ser un objeto vacio

const middleware = [thunk]

const storageState = localStorage.getItem('citas') ? JSON.parse(localStorage.getItem('citas')) : [] 
 
const store = new createStore(mainReducers, storageState, compose(applyMiddleware(...middleware),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store
