"use strict";
// mongodb.js
var MongoClient = require('mongodb').MongoClient;
var uri = process.env.NEXT_PUBLIC_MONGODB_URI;
var options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};
var client;
var clientPromise = null;
if (!process.env.NEXT_PUBLIC_MONGODB_URI) {
    throw new Error('Add Mongo URI to Environment vars');
}
if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, {
            useUnifiedTopology: true,
        }, {
            useNewUrlParser: true,
        }, {
            connectTimeoutMS: 30000,
        }, {
            keepAlive: 1,
        });
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
}
else {
    client = new MongoClient(uri, {
        useUnifiedTopology: true,
    }, {
        useNewUrlParser: true,
    }, {
        connectTimeoutMS: 30000,
    }, {
        keepAlive: 1,
    });
    clientPromise = client.connect();
}
module.exports = clientPromise;
