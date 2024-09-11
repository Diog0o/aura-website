const moongose = require('mongoose');

const connectDB = async () => {
    try {
        await moongose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connection: Success');
    }catch (error) {
        console.error('MongoDB connection: Failed');
        process.exit(1);
    }
};

module.exports = connectDB;