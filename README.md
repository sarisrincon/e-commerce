# Front-end Challenge

## Available Scripts – Client

In the project directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload automatically when you make changes.  
You may also see lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.

---

## Server Setup

This project includes a basic Node.js server to simulate the backend.

To start the server, navigate to the `server` folder and run:

### `node server.js`

---

## API & Mock Data

The server provides a simple API that the client consumes to fetch product data.

> ⚠️ **Note:** The API [https://fakestoreapi.com/] did not include all the necessary data required to fully meet the admission challenge requirements.  
> To address this, I created a custom mock with additional fields. This allowed me to enhance the user interface and ensure a more complete and realistic demonstration of the final product.
> The original dataset was too limited to support pagination in chunks of 50 items as specified.  
> To maintain proper pagination behavior and UI responsiveness, I adjusted the pagination to work with 5 items per page.