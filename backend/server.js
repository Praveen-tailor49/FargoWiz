var http = require('http')
const express =  require ('express')
const mysql = require('mysql')
const cors = require('cors')


const app = express();
app.use(express.json());
app.use(cors())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'fargowiz',
});

app.get('/', (req, res)=>{
    res.send('connect')
})

app.post('/userInfo', (req, res) => {

    const { userName, userEmail, userNumber } = req.body;
    db.query(`INSERT INTO userdata (userName, userEmail, userNumber) VALUES (?,?,?)`,
        [userName, userEmail, userNumber],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/showUser', (req, res) => {
    db.query(
        `SELECT * FROM userdata `,
        (err, result) => {
            return res.json(result);
        }
    )
})



app.listen(5000, () => console.log('server is run on 5000'))