import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Parent from "./Parent";
import Employee from './Employee';
import Home from "./Home";
import Page404 from './Page404';

const AppRoutes = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<Login />} />
                    <Route path="emp" element={<Employee />} />
                    <Route path="parent" element={<Parent />} />
                    <Route exact path="/" element={<Home />} />
                    <Route path="*" element={<Page404 />} />

                </Routes>
            </BrowserRouter>

        </>
    );
};

export default AppRoutes;