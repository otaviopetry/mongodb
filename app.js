const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
});

// we set the model name in singular and capitalized 
// mongoose will create the collection in plural
const Fruit = mongoose.model('Fruit', fruitSchema);

const apple = new Fruit ({
  name: 'Apple',
  rating: 6,
  review: 'Meh. Sometimes good.'
});

const orange = new Fruit ({
  name: 'Orange',
  rating: 10,
  review: 'The best against scurvy.'
})

const pineapple = new Fruit ({
  name: 'Pineapple',
  rating: 9,
  review: 'Hmmm, pineapples.'
})

// apple.save();

// we insert many records in db by using the MODEL
// and then specify wich variables we want

/* Fruit.insertMany([apple, orange, pineapple], function(err){
  err ? console.log(err) 
    : 
    
    mongoose.connection.close();
    console.log("Sucessfully saved all the fruits in database!");
})
 */

// challenge: iterate through the array of fruits and log only their names
Fruit.find(function(err, fruits){
  err ? console.log(err)
    :

    // insert this line when the last callback function of the connection succeeds
    mongoose.connection.close();

    fruits.forEach( (fruit) => {
      console.log(fruit.name);
    });
})