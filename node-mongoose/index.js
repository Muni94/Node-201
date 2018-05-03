const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';

const connect = mongoose.connect(url, {
    useMongoClient: true
});

connect.then((db) =>{
    console.log('Connected to the server');

    Dishes.create({
        name : "Pizza29",
        description : "Test29"
    })
    .then((dish) =>{
        console.log(dish);
        return Dishes.findByIdAndUpdate(dish._id,{
            $set: {description: 'Updated test'}
        },{
            new : true
        })
        .exec();   
    })
    .then((dish) =>{
        console.log(dish);

        dish.comments.push({
            rating: 5,
            comment: 'Im not understanding these concepts fully',
            author: 'Munikumar'
        });
        return dish.save(); 
    })
    .then((dish) =>{
        console.log(dish);

        return db.collection('dishes').drop();
    })
    .then(() =>{
        return db.close();
    })
    .catch((err) =>{
        console.log(err);
    });
});