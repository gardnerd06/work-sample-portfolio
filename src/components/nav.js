import React from 'react';
import './Styles/nav.css';
// created a nav display exporting it with a Nav function to App.js

export default function Nav({ currentPage, handlePageChange }) {
    // this function is handling page changes by calling pages withing the component file whenever the client clicks a link
    return (

        <>
            <header>
                <nav>
                    <h1>Daniel  <span> G.  </span>   Media-Portfolio</h1>
                    <div id='button'>
                        <a
                            href="#Display"
                            onClick={() => handlePageChange('Display')}
                            className={currentPage === 'Display' ? 'nav-link active' : 'nav-link'}>About Me</a>
                        <a href="#Project"
                            onClick={() => handlePageChange('Project')}
                            className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
                        >Portfolio</a>
                        <a
                            href="https://docs.google.com/document/d/1U-r9Lxxr127y8jfIvjnKZyvBRWukZZxJrRu8-6IuxIg/edit?usp=sharing"
                            className='nav-link'
                        >Resume</a>
                        <a href="#Contact"
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact Me</a>
                    </div>
                </nav>
            </header>
        </>
    );
}

