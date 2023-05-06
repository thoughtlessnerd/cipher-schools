const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const dbName = "cipherschools";

async function insertData(data, collectionName) {
  await client.connect();
  console.log(
    "Connected successfully to server with collection " + collectionName
  );
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  let many = Array.isArray(data);
  console.log(many);
  if (many) {
    let response = await collection.insertMany(data);
    return response;
  }
  let response = await collection.insertOne(data);

  client.close();
  return response;
}

async function readData(collectionName, query = {}) {
  await client.connect();
  console.log(
    "Connected successfully to server with collection " + collectionName
  );
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  let data = await collection.find(query).toArray();

  client.close();
  return data;
}

module.exports = { insertData, readData };
