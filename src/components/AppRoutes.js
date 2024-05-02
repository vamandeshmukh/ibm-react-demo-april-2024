import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./Login";
import Parent from "./Parent";
import Employee from './Employee';
import Home from "./Home";

const AppRoutes = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="emp" element={<Employee />} />
                    <Route path="parent" element={<Parent />} />
                    <Route exact path="/" element={<Login />} />
                </Routes>
            </BrowserRouter>

        </>
    );
};

export default AppRoutes;