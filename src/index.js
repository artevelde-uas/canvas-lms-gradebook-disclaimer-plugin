import { router, dom } from '@artevelde-uas/canvas-lms-app';
import React from 'react';
import ReactDOM from 'react-dom';

import Flash from './components/Flash';


export default function (options) {
    const routes = ['courses.gradebook', 'courses.grades'];

    // Optionally show on assignments page
    if (options.showOnAssignmentsPage) {
        routes.push('courses.assignments');
    }

    router.onRoute(routes, async () => {
        // Wait for the bread crumbs element
        const appCrumbs = await dom.onElementReady('#wrapper > div.ic-app-nav-toggle-and-crumbs > .ic-app-crumbs');

        // Create the container element
        const container = document.createElement('div');

        // Append the container after the bread crumbs element
        appCrumbs.after(container);

        // Render the component
        ReactDOM.render(React.createElement(Flash, { options }), container);
    });

    return {
        ...require('../package.json'),
        title: __('package.title'),
        description: __('package.description')
    };
}
