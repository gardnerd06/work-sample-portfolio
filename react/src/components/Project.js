import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import './Styles/Project.css';

export default function Project() {


    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    };

    return (
        <div className="caro">
            <Carousel id="projects" variant="dark" activeIndex={index} onSelect={handleSelect} style={{ width: '50%', height: '50%' }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/300/300"
                        alt="Neo_Plants Game"
                    />
                    <Carousel.Caption>
                        <h3>Neo Plants Game</h3>
                        <p>Web based game using MySQL, JS and Node with Express</p>
                        <i className="fa-brands fa-square-js fa-xl" ></i>
                        <i className="fa-brands fa-node fa-xl" ></i>
                        <a href='https://github.com/alexander1262/NeoPlants-Interactive-Web-Game' className="fa-solid fa-code fa-xl" ></a>
                        <a href='https://grey-stones.herokuapp.com/' className="fa-brands fa-chrome fa-xl" ></a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/300/300"
                        alt="E-Commerce Backend"
                    />
                    <Carousel.Caption>
                        <h3>Backend E-Commerce</h3>
                        <p>Business backend built using MySQL, JS and Node with Sequilize</p>
                        <i className="fa-brands fa-square-js fa-xl" ></i>
                        <i className="fa-brands fa-node fa-xl" ></i>
                        <a href="https://github.com/gardnerd06/gardnerd06-E-Commerce" className="fa-solid fa-code fa-xl" ></a>
                        <a href="https://watch.screencastify.com/v/z69foHIAW6QN8W9VIuck" className="fa-solid fa-video fa-xl" ></a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/300/300"
                        alt="BackEnd_socialMedia_API"
                    />
                    <Carousel.Caption>
                        <h3>SocialMedia API</h3>
                        <p>Backend API built using mongoDb, Mongoose and Node.js</p>
                        <i className="fa-brands fa-square-js fa-xl" ></i>
                        <i className="fa-brands fa-node fa-xl" ></i>
                        <a href='https://github.com/gardnerd06/BackEnd_socialMedia_API' className="fa-solid fa-code fa-xl" ></a>
                        <a href="https://drive.google.com/file/d/1g5iHTFLzBoO6uwFK4dcLHreUSRXCbCaS/view" className="fa-solid fa-video fa-xl"></a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/300/300"
                        alt="MySQL_Tracker_of_Employees"
                    />
                    <Carousel.Caption>
                        <h3>MySQL Employee Tracker</h3>
                        <p>A backend API that manages Eployees using MySQL, JS and Node,js with Inquirer</p>
                        <i className="fa-brands fa-square-js fa-xl" ></i>
                        <i className="fa-brands fa-node fa-xl" ></i>
                        <a href="https://github.com/gardnerd06/MySQL_Tracker_of_Employees" className="fa-solid fa-code fa-xl" ></a>
                        <a href="https://drive.google.com/file/d/1fKlA_a6PVjDG1JBqFxc9VuDy--sds6BE/view" className="fa-solid fa-video fa-xl" ></a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/300/300"
                        alt="Logo Maker"
                    />

                    <Carousel.Caption>
                        <h3>SVG Logo Maker</h3>
                        <p>A logo creator for SVG and to tests using Jest that the functions that renders the shapes for the logo.</p>
                        <i className="fa-brands fa-square-js fa-xl" ></i>
                        <i className="fa-brands fa-node fa-xl" ></i>
                        <a href="https://github.com/gardnerd06/bootcamp_logo_maker " className="fa-solid fa-code fa-xl" ></a>
                        <a href="https://drive.google.com/file/d/1ZN4aKy6v0HzJhxhliDRdwZxa483BGzuo/view" className="fa-solid fa-video fa-xl" ></a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/300/300"
                        alt="Gard22_Weather_Dash"
                    />
                    <Carousel.Caption>
                        <h3>Weather Dashboard</h3>
                        <p>Weather Dash board created by me using the openweatherAPI and JS </p>
                        <i className="fa-brands fa-square-js fa-xl" ></i>
                        <a href=" https://github.com/gardnerd06/Gard22_Weather_Dash" className="fa-solid fa-code fa-xl" ></a>
                        <a href="https://gardnerd06.github.io/Gard22_Weather_Dash/" className="fa-brands fa-chrome fa-xl" ></a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );









};