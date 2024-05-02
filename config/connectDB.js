const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    mongoose.connect("mongodb+srv://abhishekchamoli007:00000000@cluster0.ybfiz7n.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    
    })
    .then(result => {
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.log(error);
    });
};

module.exports = connectDB;