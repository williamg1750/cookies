const express = require('express');
// const cookieParser = require('cookie-parser');
const app = express();
const session = require('express-session');
// // app.use(cookieParser());
// app.use(cookieParser('thisismysecret'));

// app.get('/greet', (req, res) => {
//   const { name = 'jane doe' } = req.cookies;

//   res.send(`Hey There ${name}`);
// });

// app.get('/setname', (req, res) => {
//   res.cookie('name', 'William Guan');
//   res.send('Hello');
// });

// app.get('/getsignedcookie', (req, res) => {
//   res.cookie('fruit', 'apple', { signed: true });
//   res.send('ok signed cookie');
// });

// app.get('/verifyfruit', (req, res) => {
//   console.log(req.cookies);
//   res.send(req.signedCookies);
// });
app.use(session({ secret: 'thisisnotagoodsecret' }));

app.get('/viewcount', (req, res) => {
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  res.send(`You have viewed this page ${req.session.count} times`);
});

app.listen(7777, () => {
  console.log('now listening to port 7777');
});
