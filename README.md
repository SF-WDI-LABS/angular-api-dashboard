# API Dashboard Angular
In this lab we will explore promise chaining in Angular, using `$q` and `$http` requests.

Your goal is build a user-friendly dashboard that can fetch and display the raw JSON for any given API endpoint.

> A random delay of up to 900ms is in place on all $http request!

## Setup Instructions
Clone this repo.

Install the budo development server:
```bash
npm install budo -g
```

To run the server, make sure you're inside the application directory, then run:

```bash
budo --open
```

The homepage is broken. Your goal is to get the dasboard API interface working!

You may code in:
* `js/app.js`
* `index.html`

## Api Dashboard Goals

User Interface Improvements:
* Can you clear the input field
* Can you submit on `enter`?
* Don't make me wait for API calls!
    * Display a load spinner so that I know the app still works:
        * See `styles/main.css` for a custom `glyphicon-spin` style.
        * Add this line to see the spinner: `<span class="glyphicon glyphicon-refresh glyphicon-spin"></span>`
* Avoid the "flicker". Make sure the user never literally sees `{{ ... }}` or placeholder data rendered anywhere in the html.

## Randomized Request Failures
In `js/app.js` you can modify the `FAIL_RATE` constant to simulate, for example, a 50% chance that your `$http` requests will fail / be rejected by the server.

```js
FAIL_RATE: 50 // 50% percent chance requests will fail
```

#### User Experience
Take advantage of the random failures/delays to create a seamless user experience. How can you signal the following application states to your user:

* The request was sent to the server
* We're waiting for a response (e.g. display a load spinner)
* The request was successful (the server responded with a `2xx` status code and data).
* The request was not successful (the server responded with a `4xx` or `5xx` status code and an error message).

## Promise Reference
* [Javascript Callstack & Event Loop [Video]](https://www.youtube.com/v/8aGhZQkoFbQ?start=255)
* [Promises in Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* Promises in jQuery
    - [jQuery.Deferred](http://api.jquery.com/jQuery.Deferred/)
    - [deferred object](http://api.jquery.com/category/deferred-object/)
* Promises in Angular
    - [$q](https://docs.angularjs.org/api/ng/service/$q)
* Angular [$http module reference](https://docs.angularjs.org/api/ng/service/$http)

## Screen Shot
<img width="400" alt="screen shot 2016-02-09 at 2 44 48 pm" src="https://cloud.githubusercontent.com/assets/1489337/12933219/df607300-cf3b-11e5-9552-c1fd8ab0bb7e.png">
