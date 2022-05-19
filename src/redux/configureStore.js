import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import homeReducer, { fetchCompanies } from './company/home';
import companyReducer from './company/company';

const reducer = combineReducers({
  homeReducer, companyReducer,
});

const thunkMiddleware = applyMiddleware(thunk, logger);

const store = configureStore({ reducer, thunkMiddleware });

store.dispatch(fetchCompanies());

export default store;
