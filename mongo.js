import Mongodb, {MongoClient,ObjectId} from 'mongodb'

// if(!process.env.db_string)
//     throw 'Please set a db_string!';

// Connection URL

// const url = process.env.MONGO_DB;
const url = "mongodb://localhost:27017/bookstore";
const databaseName = 'bookstore';

const getClient = () => {
    return Mongodb.MongoClient.connect(url, {useNewUrlParser: true});
};
export {getClient}
