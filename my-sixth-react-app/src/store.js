// src/store.js
import { createStore } from 'redux';
import reducer from './Reducers/Reducers';  // Adjust the import path

const store = createStore(reducer);

export default store;
