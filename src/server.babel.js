// src/server.babel.js

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
 * Underscore
**/

import path from 'path';
import { Server as tlsServer} from 'https';
import { Server } from 'http';
import Express from 'express'; // Our server package
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import routes from './routes';
import mongo from 'mongodb'; // Our DB; JSON-based
import Monk from 'monk'; // Our DB handler
import compress from 'compression'; // Minimize data going on the wire
import fsep from 'fs-extra-plus'; // File system package; Creates directories for logs
import rfs from 'rotating-file-stream'; // Will rotate our logs
import moment from 'moment'; // Date processing library
import Morgan from 'morgan'; // Our access logger
import _ from 'underscore';
import NotFoundPage from './components/NotFoundPage';

// initialize the server and configure support for ejs templates
const db = new Monk('localhost:27017/slong');
const app = new Express();
const redirect = new Express();

// Put key and tls/ssl cert here
const certDir = path.join(__dirname,'cert');
fsep.ensureDirSync(certDir);
const privateKey = fsep.readFileSync(path.join(certDir, 'privkey.pem'), 'ascii');
const certificate = fsep.readFileSync(path.join(certDir, 'fullchain.pem'), 'ascii');

const options = {key: privateKey, cert: certificate};
const secServer = new tlsServer(options, app);
const server = new Server(redirect);
const logDir = path.join(__dirname, '../../..', 'var/log/node', moment().format('Y/MM'));

//ensure log directory exists
fsep.ensureDirSync(logDir);

//create a rotating write stream
const accessLogStream = rfs('access.log', {
    interval: '1d', // rotate daily
    path: logDir,
    compress: 'gzip' // compress rotated files
});

app.use(compress());
app.disable('x-powered-by');
app.set('view engine', 'ejs'); // Our view engine for server side rendering
app.set('views', path.join(__dirname, 'views'));
Morgan.token('date', function() {
    return moment().format('DD/MMM/YYYY:HH:mm:ss ZZ')
});
// Default Apache style logging of access logs
app.use(Morgan('combined', {stream: accessLogStream}));

// define the folder that will be used for static assets
const staticOptions = {dotfiles:"allow"};
app.use(Express.static(path.join(__dirname, 'public'), staticOptions));

app.use(function(req, res, next){
    req.db = db;
    next();
});

// universal routing and rendering
app.get('*', (req, res) => {
    //Ensuring that we use www
    if (req.headers.host.match(/.net/) != null && req.headers.host.match(/^www/) == null) {
        return res.redirect(301, 'https://www.' + req.headers.host + req.url);
    } else {
        let title = "";
        const options = {
            '/software_development':' &#8210; S/W Dev',
            '/interests':' &#8210; Personal Interests',
            '/blog':' &#8210; Blog',
            '/contact':' &#8210; Contact Me',
            '/not_found':' &#8210; Page Not Found'
        }
        if (req.url === "/"){}
        else if (options[req.url]){
            title = options[req.url];
        } else {
            title = title['/not_found'];
        }

        const staticContext = {};

        const markup = renderToString(
            <StaticRouter location={req.url} context={staticContext}>
                {routes}
            </StaticRouter>
        );

        return res.status(staticContext.statusCode || 200).render('index', { title, markup });

    }
});

// redirect for non-ssl/tls
redirect.get('*', (req, res) => {
    //Ensuring that we use www
    if (req.headers.host.match(/.net/) != null && req.headers.host.match(/^www/) == null) {
        return res.redirect(301, 'https://www.' + req.headers.host + req.url);
    } else if (req.headers.host.match(/:8080/)) {
        let host = req.headers.host.split(/:/)[0];
        return res.redirect(301, 'https://' + host + ":3000" + req.url);
    } else {
        return res.redirect(301, 'https://' + req.headers.host + req.url);
    }
});

// start the redirect to ssl/tls server
const rdtPort = 8080;
const env = process.env.NODE_ENV || 'production';
server.listen(rdtPort, err => {
    if (err) {
        return console.error(err);
    }
    console.info(`Redirect running on http://localhost:${rdtPort} [${env}]`);
});

// start the server
const port = process.env.PORT || 3000;
secServer.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on https://localhost:${port} [${env}]`);
});
