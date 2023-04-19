import React from 'react';
import './nav.css';
import Example from './Modal';

export default function Nav({ currentPage, handlePageChange }) {

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
                        >My Work</a>
                        <a
                            href="https://docs.google.com/document/d/1U-r9Lxxr127y8jfIvjnKZyvBRWukZZxJrRu8-6IuxIg/edit?usp=sharing"
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

