import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../../Components/Global/Header/Header';
import ROUTES from '../../Consts/Routes';
import Home from '../Home/Home';
import Detail from '../Detail/Detail';
import NotFound from '../NotFound/NotFound';
import Footer from '../../Components/Global/Footer/Footer';

const Authentication = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={ROUTES.home} element={<Home/>}/>

                <Route path={ROUTES.detail.path} element={<Detail/>}/>

                <Route path={ROUTES.notFound} element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </div>
    );
};

export default Authentication;