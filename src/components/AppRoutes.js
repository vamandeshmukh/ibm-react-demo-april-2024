import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Parent from "./Parent";
import Employee from './Employee';
import Home from "./Home";
import Page404 from './Page404';
import Menubar from "./Menubar";
import { useState } from "react";

const AppRoutes = () => {

    // when logged in = 
    // logout
    // others -

    // when not logged in = 
    // register 
    // login 
    // others -


    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // function 


    return (
        <>
            <BrowserRouter>
                <Menubar />
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="emp" element={<Employee />} />
                    <Route path="parent" element={<Parent />} />
                    <Route path="login" element={<Login />} />
                    <Route exact path="/" element={<Home />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default AppRoutes;