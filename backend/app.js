// import express
const express = require('express')
// use express (creating the app object by using the express function will allow us to use it.)
const app = express();

// set up a the port. "process.env.PORT" makes the port dynamically accessible; if no port is dynamically provided, port 500 witll be used.
const PORT = process.env.PORT || 500

// define the port direction for the root '/'; this is the first function to run.
// req is an object containing information about the request
// res is an object that lets us send send a response back to whoever is requesting it
app.get('/', (req, res) => {
    // send a response
    res.send("Hello from the backend!")
});

// tell our app to start listining to web requests made on the port "PORT"
// the function within the app.listen will run as soon as the app runs successfully
app.listen(PORT, () => {
    // Printing a message as result of request to port "PORT"
    console.log(`console running on port, ${PORT}`)
})