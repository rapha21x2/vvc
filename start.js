
require('dotenv').config();
const mongoose = require('mongoose');
const mongodb = require('mongodb')
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });
  require('./models/Registration');
const app = require('./app');
const server = app.listen(process.env.PORT, () => {
  console.log(`Express is running on port ${server.address().port}`);

});
