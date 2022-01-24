import { router, dom } from '@artevelde-uas/canvas-lms-app';
import React from 'react';
import ReactDOM from 'react-dom';

import __ from './i18n';
import Flash from './components/Flash';


export default function ({
    showOnAssignmentsPage = false,
    message = __('message'),
    modalLink = __('modal.link'),
    modalTitle = __('modal.title'),
    modalText = __('modal.text')
}) {
    const routes = ['courses.gradebook', 'courses.grades'];

    // Optionally show on assignments page
    if (showOnAssignmentsPage) {
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
        ReactDOM.render(React.createElement(Flash, { options: { message, modalLink, modalTitle, modalText } }), container);
    });

    return {
        ...require('../package.json'),
        title: __('package.title'),
        description: __('package.description')
    };
}
