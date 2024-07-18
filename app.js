import express from 'express';
import dotenv from 'dotenv';
import conn from './db.js';


dotenv.config();

//db connection
conn();

const app = express();
const PORT = process.env.PORT || 3000;

//ejs 
app.set('view engine', 'ejs');


//static dosyası
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});