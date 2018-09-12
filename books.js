import {getClient, databaseName,ObjectId} from './mongo'
import {prepare} from './helpers'

async function getAllBooks() {
    const client = await getClient();
    const db = client.db(databaseName);
    try{
        const Books = db.collection('Books');
        const result = await Books.find().limit(10).toArray();
        return result;
    } catch(err){
        console.error('getBooks error: ',err);
    } finally {
        client.close();
    }
}

async function getBook(_id) {
    console.log('id: ',_id);
    const client = await getClient();
    const db = client.db(databaseName);
    try{
        const Books = db.collection('Books');
        const result = prepare(await Books.findOne(ObjectId(_id)));
        return result;
    } catch(err){
        console.error('getBooks error: ',err);
    } finally {
        client.close();
    }
}

async function createBook(input){
    console.log('input: ',input)
    const client = await getClient();
    const db = client.db(databaseName);

    try{
        const Books = db.collection('Books');
        const res = await Books.insertOne(input);
        return prepare(await Books.findOne({_id:res.insertedId}));    }
    catch(err){
        console.error('addBook error: ',err);
    }
    finally{
        client.close();
    }
}
export {getBook,getAllBooks,createBook}