const express = require('express');

const app = express();

app.use('/js', express.static('js'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/1.html`);
});

app.listen(8080, () => {
  console.log('express app started at port 8080');
});
