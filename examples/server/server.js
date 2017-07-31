/*eslint-disable no-console */
import express from 'express'
import serialize from 'serialize-javascript'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackConfig from './webpack.config'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { match, RouterContext } from 'react-router';
import createHistory from 'history/createMemoryHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import { matchRoutes, renderRoutes } from 'react-router-config';

import { configureStore } from './store'
import routes from './routes'

const app = express()

app.use(webpackDevMiddleware(webpack(webpackConfig), {
  publicPath: '/__build__/',
  stats: {
    colors: true
  }
}))

const renderFullPage = (html, preloadedState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
        </script>
        <script src="/__build__/bundle.js"></script>
      </body>
    </html>
    `
}

app.use(function (req, res) {
  // const memoryHistory = createMemoryHistory(req.url);


  const branch = matchRoutes(routes, req.url);
  const content = renderToString(
        <Provider store={store}>
          <renderRoutes {...renderProps}/>
        </Provider>
      );
  const preloadedState = store.getState();

  res.send('<!doctype html>\n' + renderFullPage(content,preloadedState))
})

app.listen(8080, function () {
  console.log('Server listening on http://localhost:8080, Ctrl+C to stop')
})
