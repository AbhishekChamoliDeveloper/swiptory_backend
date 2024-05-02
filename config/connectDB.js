const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    mongoose.connect("mongodb+srv://anushkamahajan901:anushkamahajan901@cluster0.phbvsyd.mongodb.net/", {
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
