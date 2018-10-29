import React from 'react';
import ReactDOM from 'react-dom';
import Flash from './Flash';


export default function (app, options) {
    app.addRouteListener(['course.gradebook', 'course.grades'], function () {
        app.addReadyListener('#wrapper > div.ic-app-nav-toggle-and-crumbs > .ic-app-crumbs', function (el) {
            let container = document.createElement('div');
            
            el.parentNode.insertBefore(container, el.nextSibling);
            ReactDOM.render(<Flash options={options} />, container);
        });
    });
}
