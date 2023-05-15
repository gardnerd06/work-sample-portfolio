import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import './Styles/Project.css';
// created a project display page exporting it with a Project function to App.js
export default function Project() {

    // imported a carousel to render projects using useState
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    };
    // used process.env.public_url to get access to photos in the public folder when deployed
    return (
        <div className="caro">
            <Carousel id="projects" variant="dark" activeIndex={index} onSelect={handleSelect} >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}/Project/NeoPlants.png`}
                        alt="Neo_Plants Game"
                    />
                    <Carousel.Caption>
                        <div className='description'>
                            <h2>Neo Plants Game</h2>
                            <p>DESCRIPTION:
                                Web based game using MySQL, JS and Node with Express</p>
                        </div>
                        <div className='anchors'>
                            <i className="fa-brands fa-square-js fa-xl" ></i>
                            <i className="fa-brands fa-node fa-xl" ></i>
                            <a href='https://github.com/alexander1262/NeoPlants-Interactive-Web-Game' className="fa-solid fa-code fa-xl" ></a>
                            <a href='https://grey-stones.herokuapp.com/' className="fa-brands fa-chrome fa-xl" ></a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}/Project/e-commerce.png`}
                        alt="E-Commerce Backend"
                    />
                    <Carousel.Caption>
                        <div className='description'>
                            <h2>Backend E-Commerce</h2>
                            <p>DESCRIPTION: Business backend built using MySQL, JS and Node with Sequilize</p>
                        </div>
                        <div className='anchors'>
                            <i className="fa-brands fa-square-js fa-xl" ></i>
                            <i className="fa-brands fa-node fa-xl" ></i>
                            <a href="https://github.com/gardnerd06/gardnerd06-E-Commerce" className="fa-solid fa-code fa-xl" ></a>
                            <a href="https://watch.screencastify.com/v/z69foHIAW6QN8W9VIuck" className="fa-solid fa-video fa-xl" ></a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}/Project/Social-media-backend.png`}
                        alt="BackEnd_socialMedia_API"
                    />
                    <Carousel.Caption>
                        <div className='description'>
                            <h2>SocialMedia API</h2>
                            <p>DESCRIPTION: Backend API built using mongoDb, Mongoose and Node.js</p>
                        </div>
                        <div className='anchors'>                        <i className="fa-brands fa-square-js fa-xl" ></i>
                            <i className="fa-brands fa-node fa-xl" ></i>
                            <a href='https://github.com/gardnerd06/BackEnd_socialMedia_API' className="fa-solid fa-code fa-xl" ></a>
                            <a href="https://drive.google.com/file/d/1g5iHTFLzBoO6uwFK4dcLHreUSRXCbCaS/view" className="fa-solid fa-video fa-xl"></a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}/Project/SQLemployee.png`}
                        alt="MySQL_Tracker_of_Employees"
                    />
                    <Carousel.Caption>
                        <div className='description'>
                            <h2>MySQL Employee Tracker</h2>
                            <p>DESCRIPTION: Backend API built using MySQL, Node.js with Inquirer</p>
                        </div>
                        <div className='anchors'>
                            <i className="fa-brands fa-square-js fa-xl" ></i>
                            <i className="fa-brands fa-node fa-xl" ></i>
                            <a href="https://github.com/gardnerd06/MySQL_Tracker_of_Employees" className="fa-solid fa-code fa-xl" ></a>
                            <a href="https://drive.google.com/file/d/1fKlA_a6PVjDG1JBqFxc9VuDy--sds6BE/view" className="fa-solid fa-video fa-xl" ></a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}/Project/SVG-LOGO.png`}
                        alt="Logo Maker"
                    />

                    <Carousel.Caption>
                        <div className='description'>
                            <h2>SVG Logo Maker</h2>
                            <p> DESCRIPTION: Logo creator for SVG and to tests using Jest that the functions that renders the shapes for the logo.</p>
                        </div>
                        <div className='anchors'>
                            <i className="fa-brands fa-square-js fa-xl" ></i>
                            <i className="fa-brands fa-node fa-xl" ></i>
                            <a href="https://github.com/gardnerd06/bootcamp_logo_maker " className="fa-solid fa-code fa-xl" ></a>
                            <a href="https://drive.google.com/file/d/1ZN4aKy6v0HzJhxhliDRdwZxa483BGzuo/view" className="fa-solid fa-video fa-xl" ></a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}/Project/pngegg.png`}
                        alt="Jad Grocery"
                    />
                    <Carousel.Caption>
                        <div className='description'>
                            <h2>JAD Grocery</h2>
                            <p> DESCRIPTION: Project 3 Grocery store using React, GraphQL and MongoDB.</p>
                        </div>
                        <div className='anchors'>
                            <i className="fa-brands fa-square-js fa-xl" ></i>
                            <i className="fa-brands fa-node fa-xl" ></i>
                            <a href="https://github.com/gardnerd06/JAD" className="fa-solid fa-code fa-xl" ></a>
                            <a href="https://groceryjad.herokuapp.com/" className="fa-brands fa-chrome fa-xl" ></a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}/Project/WeatherDash.png`}
                        alt="Gard22_Weather_Dash"
                    />
                    <Carousel.Caption>
                        <div className='description'>
                            <h2>Weather Dashboard</h2>
                            <p>DESCRIPTION: Weather Dashboard created by me using the openweatherAPI and JS </p>
                        </div>
                        <div className='anchors'>
                            <i className="fa-brands fa-square-js fa-xl" ></i>
                            <a href=" https://github.com/gardnerd06/Gard22_Weather_Dash" className="fa-solid fa-code fa-xl" ></a>
                            <a href="https://gardnerd06.github.io/Gard22_Weather_Dash/" className="fa-brands fa-chrome fa-xl" ></a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );









};