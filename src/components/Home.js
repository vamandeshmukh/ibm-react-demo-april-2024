

import { Link } from "react-router-dom";

const Home = () => {

    return (
        <>
            <h1>Home Component</h1>

            <p>Login testing</p>
            <Link to={'/home'}>Home</Link>
            <br />
            <Link to={'/emp'}>Employee</Link>
            <br />
            <Link to={'/parent'}>Parent</Link>
            <br />
            <Link to={'/profile'}>Profile</Link>
            <br />
            <Link to={'/register'}>Register</Link>
            <br />
            <Link to={'/login'}>Login</Link>
            <br />
            <Link to={'/logout'}>Logout</Link>

        </>
    );
};

export default Home;










// import { Link } from "react-router-dom";

// const Home = () => {
//     const backgroundImageIbm = 'https://e1.pxfuel.com/desktop-wallpaper/648/58/desktop-wallpaper-6-ibm-imb.jpg';

//     return (
//         <>
//             <div
//                 style={{
//                     backgroundImage: `url(${backgroundImageIbm})`,
//                     backgroundSize: 'cover',
//                     backgroundColor: 'black',
//                     display: 'flex',
//                     minHeight: "100vh",
//                     alignItems: 'center',
//                     justifyContent: 'right',
//                 }}
//             >
//                 <div style={{ color: 'white' }}>
//                     <h1>IBM React App</h1>
//                     <Link style={{ textDecoration: 'none' }} to='/login'>Login to continue...</Link>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Home;


