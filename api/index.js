"use strict";

// Set writable data directory for serverless environments (AWS Lambda / Vercel)
process.env.DATA_DIR = process.env.DATA_DIR || "/tmp/data";

const { server } = require("../server.js");

module.exports = (req, res) => {
  server.emit("request", req, res);
};
