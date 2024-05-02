import axios from "axios";
import { useEffect, useState } from "react";

const EmpList = () => {

    const [empList, setEmpList] = useState('');
    // useEffect(() => { }, []);

    useEffect(() => {
        console.log('useEffect');
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((resp) => {
                console.log(resp);
                setEmpList(resp.data);
            })
    }, []);

    return (
        <>
            <h1>EmpList Component</h1>
            <p> {empList && empList.forEach(element => {
                <p> {element.username} </p>
            })} </p>

        </>
    );
};

export default EmpList;


// import axios from "axios";
// import { useState } from "react";

// const EmpList = () => {

//     const [empList, setEmpList] = useState('');

//     const getEmpList = () => {
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then((resp) => {
//                 console.log(resp);
//                 setEmpList(resp.data);
//             })
//     };

//     return (
//         <>
//             <h1>EmpList Component</h1>
//             <p> {empList && empList.length} </p>
//             <button onClick={getEmpList}>Get Emp List</button>

//         </>
//     );
// };

// export default EmpList;
