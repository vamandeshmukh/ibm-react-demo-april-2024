import { createSlice } from "@reduxjs/toolkit";

const empSlice = createSlice({
    name: 'empObj',
    initialState : '',
    reducers : {
        setEmpObj : (state, action) => {
            console.log(state);
            console.log(action);
            state.empObj = action.payload;
        }
        // more methods 
    }
});

// export {empSlice.reducer} = action

export {setEmpObj};

// const empSlice = createSlice({
//     name: 'empObj',
//     initialState : '',
//     reducers : {
        
//     }
// });




// import { createSlice } from "@reduxjs/toolkit";
// import Employee from "../components/Employee";

// const EmpSlice = createSlice({
//     name: 'em',
//     initialState: '',
//     reducers : {
//         abc: (state, action) => {
//             state.em = action.payload;
//         }
//     },
// });

// // export default 
// export const {abc}  = EmpSlice.actions;
// export default EmpSlice.reducer;

// // const EmpReducer = createReducer(
// //     {
        
// //     }

// //     );