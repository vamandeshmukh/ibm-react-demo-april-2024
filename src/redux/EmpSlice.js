import { createSlice } from "@reduxjs/toolkit";

const empSlice = createSlice({
    name: 'empObj',
    initialState : { 
        emp: {firstName: 'Sonu', salary: 10.50},
        emp2: {firstName: 'Monu', salary: 12.50}
    },
    reducers : {
        setEmpObj : (state, action) => {
            console.log(state);
            console.log(action);
            state.empObj = action.payload;
        }
        // more methods 
    }
});

export default empSlice.reducer;

export const {setEmpObj} = empSlice.actions;

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