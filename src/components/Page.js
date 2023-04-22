import Nav from "./nav";
import Display from "./Display";
import Footer from "./footer";
import Project from "./Project";
import Contact from "./Modal";
import React, { useState } from 'react';

// created a Page display exporting it with a Page function to App.js
export default function Page() {
    const [currentPage, setCurrentPage] = useState('Display');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'Display') {
            return <Display />;
        }
        if (currentPage === 'Project') {
            return <Project />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* I am passing the currentPage from state and the function to update it */}
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* Here I call the renderPage method which will return a component  */}
            {renderPage()}
            <Footer />
        </div>
    );
}
