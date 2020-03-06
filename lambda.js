const express = require('express');
const serverless = require('serverless-http');
const { keystone, apps } = require('./index.js');

// Only setup once per instance
const setup = keystone
  .prepare({ apps: apps, dev: process.env.NODE_ENV !== 'production' })
  .then(async ({ middlewares }) => {
    await keystone.connect();
    const app = express();
    app.use(middlewares);
    return serverless(app);
  });

module.exports.handler = async (event, context) => {
  const handler = await setup;
  return handler(event, context);
};