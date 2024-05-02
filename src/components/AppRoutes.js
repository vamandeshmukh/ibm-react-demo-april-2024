import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Parent from "./Parent";
import Employee from './Employee';
import Home from "./Home";
import Page404 from './Page404';
import Menubar from "./Menubar";

const AppRoutes = () => {

    return (
        <>
            <BrowserRouter>
                <Menubar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="emp" element={<Employee />} />
                    <Route path="parent" element={<Parent />} />
                    <Route path="login" element={<Login />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default AppRoutes;