import sqlite3 from 'sqlite3';
import fs from 'fs';
import path from 'path';

const databaseDir = 'src/data';
const databasePath = path.join(databaseDir, 'emails.db');

if (!fs.existsSync(databaseDir)) fs.mkdirSync(databaseDir);

const databaseExists = fs.existsSync(databasePath);
const database = new sqlite3.Database(databasePath);

if (!databaseExists) {
    database.serialize(() => {
        database.run('CREATE TABLE IF NOT EXISTS emails (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE)');
    });
}

export default database;