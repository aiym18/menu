import React, { useState } from 'react';
import { SlBasket } from "react-icons/sl";
import { LuSunMoon } from "react-icons/lu";
import { RiMoonClearFill } from "react-icons/ri";
import {headerimg} from "..//../img/header.png";
import { Link } from 'react-router-dom';
import { IoMdAdd } from "react-icons/io";




const Header = () => {
    const [moon,setMoon]=useState(false)
    return (
        <div id='header'>
            <div className="container">
                <div className="header">
                    <Link to={"/"}>
                    <img src='headerimg' alt="img" /> 
                    </Link>
                    <input type="text"  placeholder='Я ищу'/>
                    <Link to={"/basket"}>
                    <button><SlBasket /></button>
                    </Link>
                    <Link to={"/addproduct"}>
                    <button><IoMdAdd /></button>
                    </Link>
                    <div className="header--icon">
                    <button style={{
                        background:moon?"black":"white"
                    }} onClick={()=>setMoon(true)}><LuSunMoon /></button>
                    <button><RiMoonClearFill /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;