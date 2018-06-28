import React from 'react';
import ReactDOM from 'react-dom';
import Flash from './Flash';

import './index.css';


export default function (app, options) {
    app.addRouteListener('course.gradebook', function () {
        app.addReadyListener('#wrapper > div.ic-app-nav-toggle-and-crumbs > .ic-app-crumbs', function (el) {
            el.insertAdjacentHTML('afterend', '<div id="gradebook-disclaimer__flash"></div>');
            ReactDOM.render(<Flash message={options.message} />, document.getElementById('gradebook-disclaimer__flash'));
        });
    });
}
