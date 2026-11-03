import React from 'react'
import './Home.css'
import { useState } from "react";
import Sidebar from '../../Components/SideBar/Sidebar';
import Feed from '../../Components/Feed/Feed';


const Home = ({ sidebar }) => {


    return (
        <>
            <Sidebar sidebar={sidebar} />
            <div className={`container ${sidebar ? "" : "large_container"}`}>
                <Feed />
            </div>
        </>
    );
};
export default Home;