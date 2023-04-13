import {legacy_createStore as createStore} from 'redux'

import rootReducer from './reducers';

const store = createStore(
  rootReducer,
);

store.subscribe(()=>{
  // console.log('store', store.getState());
})

export default store;