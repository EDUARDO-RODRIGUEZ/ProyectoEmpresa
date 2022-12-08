import React from 'react'

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Footer from '../layout/footer';
import Header from '../layout/Header';
import PageAbout from '../page/about/PageAbout';
import PageContacto from '../page/contacto/PageContacto';
import PageHome from '../page/home/PageHome';
import PageProyecto from '../page/proyecto/PageProyecto';
import PageServicio from '../page/servicios/PageServicio';


const AppRoute = () => {
    return (
        <Router>
            <div>
                <Header />

                <Routes>
                    <Route path={'/'} element={<PageHome />} />
                    <Route path={'/servicio'} element={<PageServicio />} />
                    <Route path={'/proyecto'} element={<PageProyecto />} />
                    <Route path={'/contacto'} element={<PageContacto />} />
                    <Route path={'/about'} element={<PageAbout />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>

                <Footer />
            </div>
        </Router >
    )
}

export default AppRoute