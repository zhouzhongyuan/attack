const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const indexRouter = require('./route/index');
const commentRouter = require('./route/comment');

app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/comment', commentRouter);
app.listen(3000, () => console.log('Example app listening on port 3000!'))