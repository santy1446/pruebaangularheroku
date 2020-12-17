const express = require('express');

const app = express();

app.use(express.static('./dist/pruebaheroku'));
app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/pruebaheroku/' }
    );
});

app.listen(process.env.PORT || 8080);