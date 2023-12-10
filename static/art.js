const express = require('express');
const app = express();

// const data = require('./dataProvider');
// const path = require('path');

// app.get('/', (req, res) => {
//     res.json(data);
// });

const router = require('./routerProperties');
router.handleAll(app);
router.handleById(app);
router.handleByGalleryId(app);
router.handleByArtistId(app);
router.handleByYear(app);

let port = 5555;

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
})