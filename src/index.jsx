import { router, dom } from '@artevelde-uas/canvas-lms-app';
import React from 'react';
import ReactDOM from 'react-dom';
import Flash from './Flash';


export default function (options) {
    const routes = ['courses.gradebook', 'courses.grades'];

    if (options.showOnAssignmentsPage) {
        routes.push('courses.assignments');
    }

    router.onRoute(routes, async () => {
        const el = await dom.onElementReady('#wrapper > div.ic-app-nav-toggle-and-crumbs > .ic-app-crumbs');

        let container = document.createElement('div');

        el.parentNode.insertBefore(container, el.nextSibling);
        ReactDOM.render(<Flash options={options} />, container);
    });
}
