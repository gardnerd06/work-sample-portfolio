import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// Here I am using react dom to render the app in the id inside of the index.html in the public folder

ReactDOM.render(<App />, document.getElementById('root'));
