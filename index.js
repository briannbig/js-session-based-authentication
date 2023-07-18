const express = require('express')
const sessions = require('express-session')

const app = express();

app.use(
    sessions({
        secret: 'some secret',          // signing the session ID cookie
        cookie: {                       // object containing the config for session id cookie
            maxAge: 1000 * 60 * 60 * 4,
        },
        resave: true,                   // Forces the session to be saved back to the session store, even if the session data was never modified during the request
        saveUninitialized: false        // saves a session to the store even if the session was not initiated.
        // Another important option is store which we can configure to change how/where the session data is stored on the server. By default, this data is stored in the memory, i.e., MemoryStore.
    })
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// @todo register routes

app.listen(3000, () => {
    console.log(`Server Running at port 3000`);
});

