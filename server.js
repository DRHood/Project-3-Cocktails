const express = require('express');
const app = express();

// conttroller routes
const { cocktailRouter } = require('./controllers/cocktails.js');
const { spiritRouter } = require('./controllers/spirits.js');
const { mixerRouter } = require('./controllers/mixers.js');

// MIDDLEWARE
// parse HTTP requests from URL encoded string
app.use(express.urlencoded({extended: true}));
// parse HTTP requests from JSON encoded string
app.use(express.json());
// static resource location(css, images, etc.)
app.use(express.static(`${__dirname}/client/build`));

// routers for application use, first argument is prefix to paths defined in router
app.use('/api/cocktails', cocktailRouter);
app.use('/api/spirits', spiritRouter);
app.use('/api/mixers', mixerRouter);

// route to serve react appfor requests not made to api routes
app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`);
});


// set server port
const PORT = process.env.PORT || 3001
// server start
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`);
});
