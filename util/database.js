const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let db;
const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://naresh:NAResh123@expensetracker.kadvfol.mongodb.net/?retryWrites=true&w=majority')
  .then(client =>{
    console.log('DataBase is Connected!');
    db = client.db();
    callback();
  })
  .catch(err =>{
    console.log(err);
    throw err;
  })
  
}

const getDb = () => {
  if(db) {
    return db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;