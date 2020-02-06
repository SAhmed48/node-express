const mongodb = require('mongodb');
const db = require('../utils/connectdb');
const objectId = mongodb.ObjectID;


class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    save() {
        const _db = db.getDB();
        if(_db) { 
            return _db.collection('users').insertOne(this);
        }
    }

    static fetchUserById(userId) {
        const _db = db.getDB();
        return _db.collection('users').findOne({ _id: objectId(userId) });
    }
}

module.exports = User;