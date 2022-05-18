import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import companyReducer from './stock/company';
import homeReducer, { fetchCompanies } from './stock/home';

const reducer = combineReducers({
  companyReducer, homeReducer,
});

const thunkMiddleware = applyMiddleware(thunk, logger);

const store = configureStore({ reducer, thunkMiddleware });

store.dispatch(fetchCompanies());

export default store;
