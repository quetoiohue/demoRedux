import { createStore, combineReducers } from 'redux';
import arrWordsReducer from './arrWordsReducer';
import filterStatusReducer from './filterStatusReducer';
import isAddingReducer from './isAddingReducer';

const reducer = combineReducers({
    arrWords: arrWordsReducer,
    filterStatus: filterStatusReducer,
    isAdding: isAddingReducer,
});

//tao ra store
const store = createStore(reducer);
export default store;

  //tich hop vao trong ung dung react - Provider --> 1 component - 1 props -> store

