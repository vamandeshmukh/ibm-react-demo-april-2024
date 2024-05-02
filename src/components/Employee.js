import { useState } from "react";

const Employee = () => {

    // let firstName = ''; // not working 
    const [firstName, setFirstName] = useState(''); // works 

    const handleNameInput = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        // firstName = evt.target.value; // not working 
        setFirstName(evt.target.value); // works 
    };

    return (
        <>
            <h1>Employee Component</h1>
            <p>Employee name is {firstName}.</p>
            <form>
                <input type="text" name="firstName" value={firstName} onChange={handleNameInput} />
            </form>
        </>
    );
};

export default Employee;

// const Employee = () => {

//     const employee = {
//         id: 101,
//         firstName: 'Sonu',
//         salary: 10.5,
//         isIndian: true,
//         phone: 98765544310 // ''
//     };

//     return (
//         <>
//             <h1>Employee Component</h1>
//             <p>Employee component</p>
//             <p>Employee name is {employee.firstName}.</p>
//             <p>Employee salary is ₹{employee.salary}/-.</p>
//             <>
//                 {
//                     employee.phone &&
//                     <p>Employee primary phone is {employee.phone}.</p>
//                 }
//             </>
//         </>
//     );
// };

// export default Employee;


// const Employee = () => {

//     const salary = 50000;
//     const firstName = 'Sonu';

//     return (
//         <>
//             <h1>Employee component</h1>
//             <p>Employee component</p>
//             <p>Employee name is {firstName}.</p>
//             <p>Employee salary is ₹{salary}/-.</p>
//             <p>But the take home is ₹{salary - 10000}/-.</p>
//         </>
//     );
// };

// export default Employee;
