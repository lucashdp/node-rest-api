const mongoose = require('mongoose');

mongoose
    .connect(`${process.env.DATABASE}`, { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch((err) => console.log('MongoDB FAILED: ', err));

module.exports = mongoose;
