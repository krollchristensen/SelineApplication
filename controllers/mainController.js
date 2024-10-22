const path = require('path');
const fileModel = require('../models/fileModel');

// Controller til at vise HTML-siden
exports.getIndex = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
};

// Controller til at håndtere GET-anmodning til /hello
exports.getHello = (req, res) => {
    res.send('Hej fra serveren!');
};

// Controller til at sende JSON-data
exports.getData = (req, res) => {
    res.json({ message: 'Her er nogle data fra serveren', status: 200 });
};

// Controller til at håndtere POST-anmodning til /button-click
exports.postButtonClick = (req, res) => {
    res.send('Knap blev klikket!');
};

// Controller til at læse og returnere filindhold
exports.getFile = (req, res) => {
    fileModel.readFileContent((err, data) => {
        if (err) {
            return res.status(500).send('Kunne ikke læse filen');
        }
        res.send(data);
    });
};
