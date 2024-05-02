

const Child = (props) => {

    const parentDataInChild = props.parentToChild;
    const childData = 'Monu';

    const passDataToParent = () => {
        console.log(childData);
        // code 
    };


    return (
        <>
            <h1>Child component</h1>
            <p>Child data in child component: {childData}</p>
            <p>Parent data in child component: {parentDataInChild}</p>
            <button onClick={passDataToParent} >Pass Data to Parent</button>
        </>
    );
};

export default Child;