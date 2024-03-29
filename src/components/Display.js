import React, { Component } from 'react';
import './Styles/Display.css';

// created a main display page exporting it with a display function to App.js
export default function Display() {
  return (
    <main id="about">
      <aside>
        < h1 > My Journey </h1 >
        <img id='profile' src={`${process.env.PUBLIC_URL}/Project/IMG-1316.jpg`} />
      </aside>
      <p>
        Hi! I'm Daniel Gardner and welcome to my page. I am a full stack web
        developer just starting off in the industry. I'm currently enrolled in
        the full stack web developer bootcamp at the University of Penn. I am
        from philadelphia, Pennsylvania. I was formally educated in the
        Philadelphia school district, before ultimately graduating in 2006. I
        spent sometime in the workforce before entering into a program to become
        a licensed boiler plant operator for the city of philadelphia school
        district. Professionally, I have worked in a number of environments from
        sky scrapers, to schools, to prisons. Working on boiler plants with
        heating and refrigeration. I would continue on this path for a number of
        years before deciding to venture down this path of tech. I've always
        been a fan of computers and technology so coding made sense to me. I
        have a number of online businesses that I have started and operated but
        this bootcamp course through UPenn has given me the opportunity to see
        whats really happening behind the curtains. So far I've made a few
        projects and included them here in this web page. Feel free to checkout
        my repository and my code to see my progress. Happy coding everyone!!
      </p>
    </main>
  )
}
