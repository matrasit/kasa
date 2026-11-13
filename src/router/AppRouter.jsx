import { BrowserRouter, Routes, Route } from "react-router";
import Home from '../pages/Home';
import About from '../pages/About';
import Logement from '../pages/Logement';
import NotFound from '../pages/NotFound';
import MainLayout from "../layouts/MainLayout";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes> 
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/a-propos" element={<About />} />    
                    <Route path="/logement/:id" element={<Logement />} />  
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
        ); 
    };
export default AppRouter;   