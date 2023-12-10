const data = require('./dataProvider');

const handleAll = app => {
    app.get('/', (req, res) => {
        res.json(data);
    })
};

const handleById = app => {
    app.get('/:id', (req, res) => {
        const paintingId = parseInt(req.params.id);
        // console.log(paintingId);
        const painting = data.find(p => p.paintingID === paintingId);
        if(painting) {
            res.json(painting)
        } else {
            res.json({'message': 'No painting found for the provided ID'});
        }
    });
};

const handleByGalleryId = app => {
    app.get('/gallery/:id', (req, res) => {
        const galleryId = parseInt(req.params.id);
        const galleries = data.filter(painting => painting.gallery && painting.gallery.galleryID === galleryId);

        if(galleries.length > 0) {
            res.json(galleries);
        } else {
            res.json({'message': 'No paintings found for the provided gallery ID'});
        }
    });
};

const handleByArtistId = app => {
    app.get('/artist/:id', (req, res) => {
        const artistId = parseInt(req.params.id);
        const artists= data.filter(painting => painting.artist && painting.artist.artistID === artistId);

        if(artists.length > 0) {
            res.json(artists);
        } else {
            res.json({'message': 'No paintings found for the provided artist ID'});
        }
    });
};

const handleByYear = app => {
    app.get('/year/:min/:max', (req, res) => {
        const minYear = parseInt(req.params.min);
        const maxYear = parseInt(req.params.max);

        const paintingsInYearRange = data.filter(painting => {
            const yearOfWork = painting.yearOfWork;
            return yearOfWork >= minYear && maxYear <= maxYear;
        });

        if(paintingsInYearRange.length > 0) {
            res.json(paintingsInYearRange);
        } else {
            res.json({'message': 'No paintings found for the provided year range'});
        }
    });
};

module.exports = {
    handleAll, handleById, handleByGalleryId, handleByArtistId, handleByYear
};