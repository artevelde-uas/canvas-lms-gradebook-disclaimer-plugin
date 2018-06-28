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
