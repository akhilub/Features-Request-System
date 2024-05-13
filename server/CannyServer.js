// import GetPostsEndpoint from './endpoints/GetPostsEndpoint';
// import HTTPServer from './webserver/HTTPServer';

// const httpServer = new HTTPServer({
//   endpoints: {
//     '/api/posts/get': GetPostsEndpoint,
//   },
// });
// httpServer.start();
// console.log('Ready to receive requests');



//13 May 2024
import express from 'express';
import path from 'path';

import GetPostsEndpoint from './endpoints/GetPostsEndpoint';
import HTTPServer from './webserver/HTTPServer';

const app = express();

// Serve any static files from the dist directory
app.use(express.static(path.join(__dirname, '..', 'dist')));

// Insert before any other endpoint definitions:
app.get('*', (req, res, next) => {
  // Bypass API requests and forward them to their endpoints
  if(req.path.startsWith('/api/')) {
    return next();
  }
  
  // Handle React routing, return all requests to React app by serving index.html
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

// Existing HTTPServer setup with API endpoints
const httpServer = new HTTPServer({
  endpoints: {
    '/api/posts/get': GetPostsEndpoint,
    // ... other API endpoints ...
  },
});
httpServer.start();
console.log('Ready to receive requests');

