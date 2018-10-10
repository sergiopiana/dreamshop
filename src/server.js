/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import expressJwt, { UnauthorizedError as Jwt401Error } from 'express-jwt';
import { graphql } from 'graphql';
import expressGraphQL from 'express-graphql';
import jwt from 'jsonwebtoken';
import nodeFetch from 'node-fetch';
import React from 'react';
import ReactDOM from 'react-dom/server';
import PrettyError from 'pretty-error';
import App from './components/App';
import Html from './components/Html';
import { ErrorPageWithoutStyle } from './routes/error/ErrorPage';
import errorPageStyle from './routes/error/ErrorPage.css';
import createFetch from './createFetch';
import passport from './passport';
import router from './router';
import models from './data/models';
import schema from './data/schema';
import request from 'request';
// import assets from './asset-manifest.json'; // eslint-disable-line import/no-unresolved
import chunks from './chunk-manifest.json'; // eslint-disable-line import/no-unresolved
import configureStore from './store/configureStore';
import { setRuntimeVariable } from './actions/runtime';
import config from './config';

import mongoose from 'mongoose';
let newrelic = require('newrelic');

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
  // send entire app down. Process manager will restart it
  process.exit(1);
});

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

const app = express();


//
// If you are using proxy from external machine, you can set TRUST_PROXY env
// Default is to trust proxy headers only from loopback interface.
// -----------------------------------------------------------------------------
app.set('trust proxy', config.trustProxy);
app.locals.newrelic = newrelic;
//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
// Authentication
// -----------------------------------------------------------------------------
app.use(
  expressJwt({
    secret: config.auth.jwt.secret,
    credentialsRequired: false,
    getToken: req => req.cookies.id_token,
  }),
);
// Error handler for express-jwt
app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  if (err instanceof Jwt401Error) {
    console.error('[express-jwt-error]', req.cookies.id_token);
    // `clearCookie`, otherwise user can't use web-app until cookie expires
    res.clearCookie('id_token');
  }
  next(err);
});

app.use(passport.initialize());

app.get(
  '/login/facebook',
  passport.authenticate('facebook', {
    scope: ['email', 'user_location'],
    session: false,
  }),
);
app.get(
  '/login/facebook/return',
  passport.authenticate('facebook', {
    failureRedirect: '/login',
    session: false,
  }),
  (req, res) => {
    const expiresIn = 60 * 60 * 24 * 180; // 180 days
    const token = jwt.sign(req.user, config.auth.jwt.secret, { expiresIn });
    res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
    res.redirect('/');
  },
);

//
// APIS
// -----------------------------------------------------------------------------

app.get('/api/busqueda', (req, res) => {
  setTimeout(() => {
    cache = undefined;
  }, 86400000);

  const product = req.param('product');
  const uri =
    `http://bxp-argentina.com.ar:8983/solr/dreamshop/select?fq=nombre:*${product}*&q=*:*&sort=imagen desc&rows=500&wt=json`;
  const options = {
    uri,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  request(options, (err, rsp, body) => {
    if (err) {
      return res.status(401).send(err);
    }
    if (!err && parseInt(rsp.statusCode, 10) === 200) {
      res.setHeader('content-type', 'application/json');
      return res.status(200).send(body);
    }
  });
});



app.get('/api/rubros', (req, res) => {
  setTimeout(() => {
    cache = undefined;
  }, 86400000);
  const rubro = req.param('rubro');

  const uri = `http://bxp-argentina.com.ar:8983/solr/dreamshop/select?fq=rubro:${rubro}* &q=*:*&rows=500&wt=json`;
  const options = {
    uri,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  request(options, (err, rsp, body) => {
    if (err) {
      return res.status(401).send(err);
    }
    if (!err && parseInt(rsp.statusCode, 10) === 200) {
      res.setHeader('content-type', 'application/json');
      return res.status(200).send(body);
    }
  });
});

app.get('/api/productsSilfab', (req, res) => {
  setTimeout(() => {
    cache = undefined;
  }, 86400000);

  const product = req.param('product');
  const uri =
    'http://bxp-argentina.com.ar:8983/solr/dreamshop/select?fq=nombre:*silfab*&q=*:*&sort=imagen desc&rows=500&wt=json';
  const options = {
    uri,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  request(options, (err, rsp, body) => {
    if (err) {
      return res.status(401).send(err);
    }
    if (!err && parseInt(rsp.statusCode, 10) === 200) {
      res.setHeader('content-type', 'application/json');
      return res.status(200).send(body);
    }
  });
});

app.get('/api/products', (req, res) => {
  const registros = req.param('row');
  const valor = req.param('valor');
  const fq = req.param('fq');
  const min = 1;
  const max = 999999;
  const rand =  Math.round(Math.random() * (max - min) + min);
  console.log('rand:'+rand)
  setTimeout(() => {
    cache = undefined;
  }, 86400000);

  const product = req.param('product');
  const uri = `http://bxp-argentina.com.ar:8983/solr/dreamshop/select?fq=${fq}:'${valor}'&q=*:*&rows=${registros}&wt=json&sort=imagen desc, random_${rand} desc`;
  const options = {
    uri,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  request(options, (err, rsp, body) => {
    if (err) {
      return res.status(401).send(err);
    }
    if (!err && parseInt(rsp.statusCode, 10) === 200) {
      res.setHeader('content-type', 'application/json');
      return res.status(200).send(body);
    }
  });
});

app.get('/api/productsComputacion', (req, res) => {
  setTimeout(() => {
    cache = undefined;
  }, 86400000);

  const product = req.param('product');
  const uri =
    'http://bxp-argentina.com.ar:8983/solr/dreamshop/select?fq=!rubro:hogar&q=*:*&rows=50&wt=json';
  const options = {
    uri,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  request(options, (err, rsp, body) => {
    if (err) {
      return res.status(401).send(err);
    }
    if (!err && parseInt(rsp.statusCode, 10) === 200) {
      res.setHeader('content-type', 'application/json');
      return res.status(200).send(body);
    }
  });
});

app.get('/api/rubrosComputacion', (req, res) => {
  setTimeout(() => {
    cache = undefined;
  }, 86400000);

  const product = req.param('product');
  const uri = 'http://bxp-argentina.com.ar:8983/solr/dreamshop/select?fl=rubro&indent=on&q=*:*&rows=100&wt=json&group=true&group.field=rubro&group.main=true&fq=!rubro=hogar&fq=!rubro=salud';
  const options = {
    uri,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  request(options, (err, rsp, body) => {
    if (err) {
      return res.status(401).send(err);
    }
    if (!err && parseInt(rsp.statusCode, 10) === 200) {
      res.setHeader('content-type', 'application/json');
      return res.status(200).send(body);
    }
  });
});

app.get('/api/rubrosHogar', (req, res) => {
  setTimeout(() => {
    cache = undefined;
  }, 86400000);

  const product = req.param('product');
  const uri = 'http://bxp-argentina.com.ar:8983/solr/dreamshop/select?fl=rubro&indent=on&q=*:*&rows=100&wt=json&group=true&group.field=rubro&group.main=true&fq=rubro=hogar';
  const options = {
    uri,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  request(options, (err, rsp, body) => {
    if (err) {
      return res.status(401).send(err);
    }
    if (!err && parseInt(rsp.statusCode, 10) === 200) {
      res.setHeader('content-type', 'application/json');
      return res.status(200).send(body);
    }
  });
});
app.get('/api/rubrosSalud', (req, res) => {
  setTimeout(() => {
    cache = undefined;
  }, 86400000);

  const product = req.param('product');
  const uri = 'http://bxp-argentina.com.ar:8983/solr/dreamshop/select?fl=subrubro&indent=on&q=*:*&rows=100&wt=json&group=true&group.field=subrubro&group.main=true&fq=rubro=salud';
  const options = {
    uri,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  request(options, (err, rsp, body) => {
    if (err) {
      return res.status(401).send(err);
    }
    if (!err && parseInt(rsp.statusCode, 10) === 200) {
      res.setHeader('content-type', 'application/json');
      return res.status(200).send(body);
    }
  });
});

//
// Register API middleware
// -----------------------------------------------------------------------------
app.use(
  '/graphql',
  expressGraphQL(req => ({
    schema,
    graphiql: __DEV__,
    rootValue: { request: req },
    pretty: __DEV__,
  })),
);

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', async (req, res, next) => {
  try {
    const css = new Set();

    // Enables critical path CSS rendering
    // https://github.com/kriasoft/isomorphic-style-loader
    const insertCss = (...styles) => {
      // eslint-disable-next-line no-underscore-dangle
      styles.forEach(style => css.add(style._getCss()));
    };

    // Universal HTTP client
    const fetch = createFetch(nodeFetch, {
      baseUrl: config.api.serverUrl,
      cookie: req.headers.cookie,
      schema,
      graphql,
    });

    const initialState = {
      user: req.user || null,
    };

    const store = configureStore(initialState, {
      fetch,
      // I should not use `history` on server.. but how I do redirection? follow universal-router
    });

    store.dispatch(
      setRuntimeVariable({
        name: 'initialNow',
        value: Date.now(),
      }),
    );

    // Global (context) variables that can be easily accessed from any React component
    // https://facebook.github.io/react/docs/context.html
    const context = {
      insertCss,
      fetch,
      // The twins below are wild, be careful!
      pathname: req.path,
      query: req.query,
      // You can access redux through react-redux connect
      store,
      storeSubscription: null,
    };

    const route = await router.resolve(context);

    if (route.redirect) {
      res.redirect(route.status || 302, route.redirect);
      return;
    }

    const data = { ...route };
    data.children = ReactDOM.renderToString(
      <App context={context}>{route.component}</App>,
    );
    data.styles = [{ id: 'css', cssText: [...css].join('') }];

    const scripts = new Set();
    const addChunk = chunk => {
      if (chunks[chunk]) {
        chunks[chunk].forEach(asset => scripts.add(asset));
      } else if (__DEV__) {
        throw new Error(`Chunk with name '${chunk}' cannot be found`);
      }
    };
    addChunk('client');
    if (route.chunk) addChunk(route.chunk);
    if (route.chunks) route.chunks.forEach(addChunk);

    data.scripts = Array.from(scripts);
    data.app = {
      apiUrl: config.api.clientUrl,
      state: context.store.getState(),
    };

    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
    res.status(route.status || 200);
    res.send(`<!doctype html>${html}`);
  } catch (err) {
    next(err);
  }
});

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(pe.render(err));
  const html = ReactDOM.renderToStaticMarkup(
    <Html
      title="Internal Server Error"
      description={err.message}
      styles={[{ id: 'css', cssText: errorPageStyle._getCss() }]} // eslint-disable-line no-underscore-dangle
    >
      {ReactDOM.renderToString(<ErrorPageWithoutStyle error={err} />)}
    </Html>,
  );
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
const promise = models.sync().catch(err => console.error(err.stack));
if (!module.hot) {
  promise.then(() => {
    app.listen(config.port, () => {
      console.info(`The server is running at http://localhost:${config.port}/`);
    });
  });
}

//
// Hot Module Replacement
// -----------------------------------------------------------------------------
if (module.hot) {
  app.hot = module.hot;
  module.hot.accept('./router');
}

export default app;
