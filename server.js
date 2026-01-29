import express from 'express';
import bcrypt from 'bcrypt-nodejs';
import cors from 'cors';
import knex from 'knex';
import handleRegister from './Controllers/register.js';
import handleSignin from './Controllers/signin.js';
import handleProfileGet from './Controllers/profile.js';
// import handleImage from './Controllers/image.js';
import { handleApiCall, handleImage } from './Controllers/image.js';
const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'asadn',
        port: '5432',
        password: 'pakistan123',
        database: 'smart-brain'
    }
})

const app = express();
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send(database.users);
});

app.post('/signin', (req, res) => { handleSignin(req, res, db, bcrypt) }) // Dependency Injection
app.post('/register',(req, res) => { handleRegister(req, res, db, bcrypt) }) // Dependency Injection
app.get('/profile/:id', (req, res) => { handleProfileGet(req, res, db)})
app.put('/image', (req, res) => { handleImage(req, res, db)})
app.post('/imageurl', (req, res) => { handleApiCall(req, res)})


app.listen(6767, () => {
    console.log('app is running on port 6767');
})

/*
/ --> res = this is working
/signin -> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT = user

*/
