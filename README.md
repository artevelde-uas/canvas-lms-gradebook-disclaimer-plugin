# Canvas LMS Course Gradebook Disclaimer Plug-in

Plugin for the [Canvas LMS theme app](https://github.com/ahsdile/canvas-lms-app) that adds a disclaimer on the gradebook page.

## Installation

Using NPM:

    npm install @ahsdile/canvas-lms-gradebook-disclaimer-plugin

Using Yarn:

    yarn add @ahsdile/canvas-lms-gradebook-disclaimer-plugin

## Usage

Just import the plug-in and add it to the Canvas app:

```javascript
import canvas from '@ahsdile/canvas-lms-app';
import gradebookDisclaimerPlugin from '@ahsdile/canvas-lms-gradebook-disclaimer-plugin';

canvas.addPlugin(gradebookDisclaimerPlugin, {
    message: 'This is a disclaimer!'
});

canvas.run();
```

##Options##

  * **message**: The message to appear in the flash box.
  * **modalLink**: [optional] The label of the link that will open the modal window.
  * **modalTitle**: [optional] The title of the modal window.
  * **modalText**: [optional] The text in the body of the modal window.

## Building

This plug-in uses React so it has to be compiled into JavaScript:

    npm run build

or:

    yarn build
