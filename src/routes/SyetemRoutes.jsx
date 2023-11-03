import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { createContext, useState } from "react";
import { properties as houses } from "../data";

export const AppContext = createContext();

const SystemRoutes = () => {

    const[properties, setProperties] = useState(houses);


    return (
        <AppContext.Provider value={{properties, setProperties}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="*" element={<h2>Page Not Found</h2>}/>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
};
 
export default SystemRoutes;