const config = require('../config.json');
const mongoose = require('mongoose');
const InitiateMongoServer = async () => {
try {
    await mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true });

    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
}
mongoose.Promise = global.Promise;
// mongoose.connection.on('error', err => {
//  console.log(err);
//   });
module.exports = {
    InitiateMongoServer:InitiateMongoServer,
    User: require('../users/user.model')
};