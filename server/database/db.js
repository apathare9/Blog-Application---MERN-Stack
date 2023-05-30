import mongoose from 'mongoose';



const Connection = async (username, password) => {
    const URL = 'mongodb://user:sidecs2023@siddhesh-shard-00-00.98bs6.mongodb.net:27017,siddhesh-shard-00-01.98bs6.mongodb.net:27017,siddhesh-shard-00-02.98bs6.mongodb.net:27017/webapp?ssl=true&replicaSet=atlas-13apkp-shard-0&authSource=admin&retryWrites=true&w=majority';
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;