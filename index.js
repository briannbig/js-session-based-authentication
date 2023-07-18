const express = require('express')
const sessions = require('express-session')

const app = express();

app.use(
    sessions({
        secret: 'some secret',
        cookie: {
            maxAge: 1000 * 60 * 60 * 4,
        },
        resave: true,
        saveUninitialized: false
    })
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// @todo register routes

app.listen(3000, () => {
    console.log(`Server Running at port 3000`);
});

