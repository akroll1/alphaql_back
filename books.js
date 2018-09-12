import {getClient, databaseName,ObjectId} from './mongo'

async function getAllBooks() {
    const client = await getClient();
    const db = client.db(databaseName);
    try{
        const Books = db.collection('Books');
        const result = await Books.find().limit(100).toArray();
        return result;
    } catch(err){
        console.error('getBooks error: ',err);
    } finally {
        client.close();
    }
}
export {getAllBooks}