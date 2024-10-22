const express = require('express');
const path = require('path');
const app = express();
const mainRoutes = require('./routes/mainRoutes');

// Middleware til statiske filer
app.use(express.static(path.join(__dirname, 'public')));

// Brug routes fra routes-mappen
app.use('/', mainRoutes);

// Serveren lytter på port 3000
app.listen(3000, () => {
    console.log('Serveren kører på http://localhost:3000');
});
