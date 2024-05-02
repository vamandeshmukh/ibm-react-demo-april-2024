const Employee = () => {

    const employee = {
        id: 101,
        firstName: 'Sonu',
        salary: 10.5,
        isIndian: true,
        phone: 98765544310 // ''
    };

    return (
        <>
            <h1>Employee Component</h1>
            <p>Employee component</p>
            <p>Employee name is {employee.firstName}.</p>
            <p>Employee salary is ₹{employee.salary}/-.</p>
            <>
                {
                    employee.phone &&
                    <p>Employee primary phone is {employee.phone}</p>
                }
            </>
        </>
    );
};

export default Employee;


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
