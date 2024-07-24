import React from "react";
import logoImg from "../assets/images/logo-black.jpg";
import { footerData } from "../assets/data/dummydata";
import {BsApple, BsGooglePlay} from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Footer = () => {
    return (
     <>
        <section className="app w-4/5 m-auto rounded-lg shadow-shadow2 text-white flex md:flex-col bg-blue-600 mt-16 relative z-10">

            <div className="left w-[60%] md:w-full p-10">
                <h1 className="text-4xl font-semibold leading-tight">
                    Start Learning  <br/>Today
                </h1>
            </div>
            <div className="right w-[40%] md:w-full flex items-center px-5 rounded-r-lg rounded-bl-[500px] gap-8 bg-[#ff7c54] md:bg-transparent md:p-8">
                <div className="box flex gap-2 items-center px-5 py-3 border text-white border-gray-50 hover:bg-white hover:text-black shadow-shadow1 rounded-sm">
                    <BsApple/>
                    <label for="texxt" className="text-sm">
                        
                         App Store
                    </label> 
                </div>
                <div className="box flex gap-2 items-center px-5 py-3 border text-white border-gray-50 hover:bg-white hover:text-black shadow-shadow1 rounded-sm">
                    <BsGooglePlay/>
                    <label for="texxt" className="text-sm">
                        
                         Play Store
                    </label> 
                </div>
            </div>
        </section>
        <footer className="bg-[#f3f4f8] py-10 pt-32 -mt-24">
            <div className="container grid grid-cols-4 gap-5 md:grid-cols-2">
                <div className="logo">
                    <img src={logoImg} alt="img" className="h-14"/>
                    <span className="text-[14px]">
                        Great lesson ideas and lesson plans for ESL teachers! Educators can customize 
                         lesson plan to best.
                    </span>
                </div>
                {footerData.map((val, index)=> (
                    <li key={index}>
                                <h4 className="text-black text-sm font-semibold mb-5">
                                    {val.header}
                                    </h4>
                                    {
                                        val.subtitle.map((sub,index)=>(
                                            <NavLink key ={index} className="text-[14px] block mb-2">
                                                {sub.header}</NavLink>
                                        ))
                                    }
                    </li>
                ))} 
            </div>
        </footer>
     </>
    );
};

export default Footer;