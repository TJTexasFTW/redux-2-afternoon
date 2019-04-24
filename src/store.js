//MY ATTEMPT AT THE INSTRUCTIONS

// import createStore { combineReducer, applyMiddleware } from 'react-redux';
// const promiseMiddleware = import promiseMiddleware from 'react-promise-middleware';
// import reducer from './ducks/budgetReducer';

// const rootReducer = combineReducers({
//     budget: budgetReducer
//   })

// export createStore(rootReducer)(applyMiddleware(promiseMiddleware));



//SOLUTION FROM EXERCISE
import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import budgetReducer from './ducks/budgetReducer';
import userReducer from './ducks/userReducer';

const rootReducer = combineReducers({
  budget: budgetReducer,
  user: userReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));