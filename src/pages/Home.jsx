import React from 'react';

import "./css/HomeStyle.css";
import NavBar from '../components/NavBar';

const Home = () => {
    return (
        <div className='container-main bg-dark'>
            <NavBar></NavBar>
            <h1>Pagina Home</h1>
        </div>
    );
}

export default Home;
