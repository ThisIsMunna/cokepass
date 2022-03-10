import express from 'express';
import {MongoClient} from 'mongodb'
import dotenv from 'dotenv'

dotenv.config({path:  '../.env'})
const app = express();


async function main() {
const uri = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.szujx.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;
console.log(process.env.DATABASE_USERNAME)
const client = new MongoClient(uri)
try {
await client.connect();
await listDatabases(client);
}
catch(e) {
    console.error(e);
}
finally{
    await client.close();
}

}
async function listDatabases(client: any){
    const databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach((db:any) => console.log(` - ${db.name}`));
}

main().catch(console.error)