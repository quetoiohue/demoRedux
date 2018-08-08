import { createStore } from 'redux';

const defaultState = {
    cityName: null,
    temp: null,
    isLoading: false,
    error: false
};
 const reducer = (state = defaultState, action) => {
     switch (action.type) {
         case 'FETCH_START':
             return { cityName: null , error: false , temp: null, isLoading: true };
         case 'FETCH_SUCCESS':
          return { error : false, cityName: action.cityName, temp: action.temp, isLoading: false };
        case 'FETCH_ERROR':
        return { cityName: null , error: true , temp: null, isLoading: false };
         default:
             return state;
     }
 };

 const store = createStore(reducer);
 export default store;

