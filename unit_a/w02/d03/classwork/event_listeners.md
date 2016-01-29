# Events and Event Listeners

![](t60f1.jpg)


# Objectives

- make our websites respond dynamically to user input.
- apply multiple types of event listeners to multiple types of elements


## Methods
- element.addEventListener(eventType, callback)
- element.removeEventListener(eventType, callback)


## Synchronous (Blocking) vs. Asynchronous (Non-Blocking) Code

User input can occur at any time. We have no control over the type or timing of user input.

This means that there is no predefined order in which code will run. In fact, there is no guarantee that all parts of the code will run at all. As programmers, we have to account for the different possibilities ourselves.

Thankfully, javascript is built to handle this ambiguity. It is built as an asynchronous language and callbacks are essential to allowing javascript to handle asynchronicity.

Later on, we will see that user input isn't the only thing that makes javascript code asynchronous, i.e. the timing of events are unknown creating a ambiguity about when code can and should run. For example, there are no guarantees on how long downloads or uploads of files will take or what order they will complete in.

Javascript's asynchronicity also gives us the additional advantage of non-blocking input and output. This means that javascript can do other work while it is waiting for certain things like a file download to finish. In blocking languages, we have to wait for the download to finish before any other work can be done. It blocks the execution of additional code.

## Events

Events are objects that represent actions and new states. When in the domain of the DOM, events mainly consist of user actions like clicking, typing, scrolling, and window resizing.

Inside of an event listener: ```console.log(event)``` to see all of the information contained in an event object.

List of Events:
https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events

Keyboard event resource:
http://www.kirupa.com/html5/keyboard_events_in_javascript.htm
Mouse-generated events resource:
https://dzone.com/articles/all-mouse-events-javascript


## Event Listeners

Event Listeners are callback functions that wait for an event to occur before triggering.

You can add event listeners to

  - DOM elements
  - the document
  - the window object
