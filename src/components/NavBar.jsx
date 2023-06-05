import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import "./css/NavStyle.css";

const NavBar = () => {
    return (
        <nav className='nav-bar nav-dark'>
            <h1>Pedro Dev <FaReact size={50} /></h1>
            <ul>
                <li>
                    <a href='#'>GitHub<AiFillGithub></AiFillGithub></a>
                </li>
                <li>
                    <a href='#'>Linkedin<AiFillGithub></AiFillGithub></a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
