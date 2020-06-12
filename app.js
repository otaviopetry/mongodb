const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema ({

  name: {
    type: String,
    required: [true, 'Please check your data entry, no name specified']
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

// we set the model name in singular and capitalized 
// mongoose will create the collection in plural
const Fruit = mongoose.model('Fruit', fruitSchema);

const avocado = new Fruit ({
  name: "Avocado",
  rating: 10,
  review: "I could eat it everyday."
})

const peech = new Fruit ({
  name: "Peech",
  rating: 10,
  review: "So good."
})

const pineapple = new Fruit ({
  name: "Pineapple",
  rating: 10,
  review: "Excellent fruit"
})

/* Fruit.insertMany( [peech, pineapple], (err) => {
  err ? console.log(err)
  :
    console.log("Sucessfully inserted entries in database.")
}) */


const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Check your entry. Person's name has not been defined."]
  },
  age: {
    type: Number,
    required: [true, "Person's age must be informed."]
  },
  favoriteFruit: fruitSchema
});

const Person = mongoose.model('Person', personSchema);

const john = new Person ({
  name: "John",
  age: 37
})

const megan = new Person ({
  name: "Megan",
  age: 30,
  favoriteFruit: pineapple
})

//megan.save();

// newPerson.save();

Person.updateOne(
  { name: "John" },
  { favoriteFruit: peech },
  (err) => {
    err ? console.log(err)
    :
      console.log("Sucessfully updated entry.")
  }
)