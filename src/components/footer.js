import React from 'react';
import './Styles/footer.css';
export default function Footer() {

  // created a footer display page exporting it with a footer function to App.js

  return (
    <footer id="contact">
      <h3>Connect with Me:</h3>
      <div id='footerTag'>
        <a href="https://github.com/gardnerd06" className="fa-brands fa-github fa-2xl"></a>
        <a href="https://www.linkedin.com/in/daniel-gardner-562020253/" className="fa-brands fa-linkedin fa-2xl"></a>
        <a href="https://twitter.com/gardnerd06" className="fa-brands fa-twitter fa-2xl"></a>
      </div>
    </footer>
  );
}
