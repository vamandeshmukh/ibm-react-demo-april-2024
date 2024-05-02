import Child from "./Child";

const Parent = () => {

    const parentData = 'Sonu';

    return (
        <>
            <h1>Parent component</h1>
            <p>Parent data in parent component: 
                {parentData}</p>
            <Child />
        </>
    );
};

export default Parent;