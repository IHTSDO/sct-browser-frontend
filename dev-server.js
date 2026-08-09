const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;
const API_HOST = process.env.API_HOST || 'http://localhost:8080';

// Serve static files from the project root
app.use(express.static(path.join(__dirname), {
  setHeaders: (res, path) => {
    res.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.set('Expires', 'Sat, 01 Jan 2000 00:00:00 GMT');
    res.set('Pragma', 'no-cache');
  }
}));

// Proxy for Snowstorm API
app.use('/snowstorm/snomed-ct', createProxyMiddleware({
  target: API_HOST,
  changeOrigin: true,
  pathRewrite: {
    '^/snowstorm/snomed-ct': ''
  },
  onProxyReq: (proxyReq, req, res) => {
    console.log(`[PROXY] ${req.method} ${req.path} -> ${API_HOST}${proxyReq.path}`);
  }
}));

// Proxy for FHIR
app.use('/fhir', createProxyMiddleware({
  target: API_HOST,
  changeOrigin: true,
  pathRewrite: {
    '^/fhir': '/fhir'
  },
  onProxyReq: (proxyReq, req, res) => {
    console.log(`[PROXY] ${req.method} ${req.path} -> ${API_HOST}${proxyReq.path}`);
  }
}));

// Proxy for ECL (if running locally on port 8080)
app.use('/ecl', createProxyMiddleware({
  target: 'http://localhost:8080',
  changeOrigin: true,
  pathRewrite: {
    '^/ecl': ''
  },
  onError: (err, req, res) => {
    console.log('[ECL PROXY ERROR] ECL service not available on localhost:8081');
    res.status(502).send('ECL service not available');
  }
}));

// Start server
app.listen(PORT, () => {
  console.log(`\nSNOMED CT Browser development server running at:`);
  console.log(`   http://localhost:${PORT}`);
  console.log(`\nProxying API requests to: ${API_HOST}`);
  console.log(`\nAPI endpoints:`);
  console.log(`   /snowstorm/snomed-ct/* -> ${API_HOST}/*`);
  console.log(`   /fhir/*                -> ${API_HOST}/fhir/*`);
  console.log(`   /ecl/*                 -> http://localhost:8080/*`);
  console.log(`\nPress Ctrl+C to stop\n`);
});
