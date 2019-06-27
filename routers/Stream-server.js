const express = requuire('express');
const router = express.Router();

const controllStream = require('../controllers/stream-server.js');

router.get('/readKieu', controllStream.readTruyenKieu);

module.exports = router;
