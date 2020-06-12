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

/* peech.save(); */

Fruit.deleteMany(
  { name: /Peech/ },
  (err) => {
    err ? console.log(err)
    :
      console.log("Sucessfully deleted all matching entries from database.");
  }
)


/* Fruit.deleteOne(
  { name: 'Peech' },
  (err) => {
    err ? console.log(err)
    :
      console.log('Sucessfully deleted entry from database.')
  }
)
 */
/* Fruit.updateOne(
  { _id: '5ee2f211465f5323f6b311a4' },
  { 
    name: 'Avocado',
    review: 'I could eat it everyday!!!'
  },
  (err) => {
    err ? console.log(err)
    :
      console.log('Successfully update.');
  }
)
 */


// challenge: iterate through the array of fruits and log only their names

/* Fruit.find(function(err, fruits){
  err ? console.log(err)
    :

    // insert this line when the last callback function of the connection succeeds
    mongoose.connection.close();

    fruits.forEach( (fruit) => {
      console.log(fruit.name);
    });
}) */