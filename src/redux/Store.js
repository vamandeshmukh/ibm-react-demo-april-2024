
// steps in using redux store - 

// install libraries 
// create store 
// provide store to the app  
// create slices 
// send data to store 
// receive data from store 

import { configureStore } from "@reduxjs/toolkit";

import EmpReducer from './EmpSlice';
import UserReducer from './UserSlice';

// const store = configureStore({});

const store = configureStore({
    reducer: {
        empObj: EmpReducer,
        user: UserReducer
        // more reducers  
    }
});

export default store;

// import { configureStore } from "@reduxjs/toolkit";


// const Store = configureStore({
//     reducer: ''
// });

// export default Store;