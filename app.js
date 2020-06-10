const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// Database name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url, {useUnifiedTopology: true});

// Use connect method to connect to the server
client.connect(function(error) {
    assert.equal(null, error);
    console.log("Connected sucessfully to server.");

    const db = client.db(dbName);

    findDocuments(db, function (){
        client.close();
    });    
})

const insertDocuments = function(db, callback) {

    // Get the documents collection
    const collection = db.collection('fruits');

    // Insert some documents
    collection.insertMany([
      {
          name: "Apple",
          score: 6,
          review: "Sometimes awesome, sometimes really YUCK"
      },
      {
          name: "Orange",
          score: 8,
          review: "Oh, this golden citric fruit"
      },
      {
          name: "Banana",
          score: 10,
          review: "I'm living because of this fruit."
      }
    ], function(error, result) {
      assert.equal(error, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
  }

  const findDocuments = function(db, callback) {

    // Get the documents collection
    const collection = db.collection('fruits');

    // Find some documents
    collection.find({}).toArray(function(error, fruits) {
      assert.equal(error, null);
      console.log("Found the following records");
      console.log(fruits)
      callback(fruits);
    });
  }