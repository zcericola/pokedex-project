'use strict';
const Hapi = require('hapi');
const cors = require('cors');
const axios = require('axios');
const { json } = require('body-parser');

//creating a server with a host and a port and using cors middleware
const server = new Hapi.server({
  host: 'localhost',
  port: 3002,
  routes: { cors: true }
});

//Endpoints
server.route({
  method: 'GET',
  path: '/pokemon',
  handler: async function(request, h) {
    //return h.response('Howdy doody!');

    let promise = await axios({
      method: 'get',
      url: 'http://pokeapi.co/api/v2/pokemon/'
    }).then(res => {
      return res.data;
    });
    return h.response(promise).code(200);
  }
});

//starting the server
async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Server running at: ' + server.info.uri);
}

start();
