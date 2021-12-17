# Canvas LMS Course Gradebook Disclaimer Plug-in

Plugin for the [Canvas LMS theme app](https://github.com/ahsdile/canvas-lms-app) that adds a disclaimer on the gradebook page.

## Installation

Using NPM:

    npm install @artevelde-uas/canvas-lms-gradebook-disclaimer-plugin

Using Yarn:

    yarn add @artevelde-uas/canvas-lms-gradebook-disclaimer-plugin

## Usage

Just import the plug-in and add it to the Canvas app:

```javascript
import { run, addPlugin } from '@ahsdile/canvas-lms-app';
import gradebookDisclaimerPlugin from '@artevelde-uas/canvas-lms-gradebook-disclaimer-plugin';

addPlugin(gradebookDisclaimerPlugin, {
    message: 'This is a disclaimer!'
});

run();
```

You can also create a new local plug-in and extend the gradebook disclaimer:

```javascript
import gradebookDisclaimerPlugin from '@artevelde-uas/canvas-lms-gradebook-disclaimer-plugin';

export default function (app) {
    gradebookDisclaimerPlugin(app, {
        message: 'Canvas marks that count as final grade are indicative partial grades.',
        modalTitle: 'Indicative partial grade',
        modalText: `
            <blockquote>
                <p>An indicative partial grade is a grade that indicates the extent to which the student has acquired competences of a course unit or parts thereof. The indicative partial grade is preliminary data with a view to support, remediation opportunities and promoting the study progress.</p>
                <footer>
                    <cite>&mdash; <a href="https://example.org/student/studycontract.pdf">
                        Student Study Contract</a></cite>
                </footer>
            </blockquote>
        `
    });
}
```

Then import it like this:

```javascript
import myDisclaimerPlugin from './plugins/myDisclaimerPlugin';
```

##Options##

  * **message**: The message to appear in the flash box.
  * **modalLink**: [optional] The label of the link that will open the modal window.
  * **modalTitle**: [optional] The title of the modal window.
  * **modalText**: [optional] The text in the body of the modal window.
