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
const sessionOptions = {
  secret: 'thisisnotagoodsecret',
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionOptions));

app.get('/viewcount', (req, res) => {
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  res.send(`You have viewed this page ${req.session.count} times`);
});

app.get('/register', (req, res) => {
  const { username = 'anon' } = req.query;
  req.session.username = username;
  res.redirect('/greet');
});

app.get('/greet', (req, res) => {
  const { username } = req.session;
  res.send(`Hello  ${username} `);
});

app.listen(3000, () => {
  console.log('now listening to port 3000');
});
