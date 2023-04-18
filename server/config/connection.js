const mongoose = require('mongoose');
console.log(process.env.MONGODB_URI, "kdaksljasdlkjfakslddsjkfasdljkadsfjaklsdasdf");
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
