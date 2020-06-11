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

// apple.save();

Fruit.insertMany([apple, orange], function(err){
  err ? console.log(err) : console.log("Sucessfully saved all the fruits in database!");
})
