// src/server.js

/***************************
 * Imported packages:
 * React
 * React-Router
 * Express
 * MongoDB
 * FS-Extra-Plus
 * Rotating-File-Stream
 * Monk
 * Compression
 * Moment
 * Morgan
**/

import path from 'path';
import { Server } from 'http';
import Express from 'express'; // Our server package
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import mongo from 'mongodb'; // Our DB; JSON-based
import Monk from 'monk'; // Our DB handler
import compress from 'compression'; // Minimize data going on the wire
import fsep from 'fs-extra-plus'; // File system package; Creates directories for logs
import rfs from 'rotating-file-stream'; // Will rotate our logs
import moment from 'moment'; // Date processing library
import Morgan from 'morgan'; // Our access logger

import NotFoundPage from './components/NotFoundPage';

// initialize the server and configure support for ejs templates
const db = new Monk('localhost:27017/forums');
const app = new Express();
const server = new Server(app);
const logDir = path.join('/var/log/node', moment().format('Y/MM'));

//ensure log directory exists
fsep.ensureDirSync(logDir);

//create a rotating write stream
const accessLogStream = rfs('access.log', {
    interval: '1d', // rotate daily
    path: logDir,
    compress: 'gzip' // compress rotated files
});

app.set('view engine', 'ejs'); // Our view engine for server side rendering
app.set('views', path.join(__dirname, 'views'));
app.use(compress());
Morgan.token('date', function() {
    return moment().format('DD/MMM/YYYY:HH:mm:ss ZZ')
});
// Default Apache style logging of access logs
app.use(Morgan('combined', {stream: accessLogStream}));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
    req.db = db;
    next();
});

// universal routing and rendering
app.get('*', (req, res) => {
    //Ensuring that we use www
    if (req.headers.host.match(/^www/) == null) {
        return res.redirect(301, 'http://www.' + req.headers.host + req.url);
    } else {
        match(
            { routes, location: req.url },
            (err, redirectLocation, renderProps) => {

          // in case of error display the error message
                if (err) {
                    return res.status(500).send(err.message);
                }

          // in case of redirect propagate the redirect to the browser
                if (redirectLocation) {
                    return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
                }

          // generate the React markup for the current route
                let markup;
                if (renderProps) {
            // if the current route matched we have renderProps
                    markup = renderToString(<RouterContext {...renderProps}/>);
                } else {
            // otherwise we can render a 404 page
                    markup = renderToString(<NotFoundPage/>);
                    res.status(404);
                }

          // render the index template with the embedded React markup
                return res.render('index', { markup });
            }
        );
    }
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});

