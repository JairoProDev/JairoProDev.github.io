// En generate.js
const ejs = require('ejs');
const fs = require('fs');

ejs.renderFile('index.ejs', (err, html) => {
  if (err) {
    console.error(err);
  } else {
    fs.writeFileSync('index.html', html);
  }
});