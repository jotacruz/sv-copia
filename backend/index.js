const mongoose = require('mongoose')
const express = require('express')
let cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const Data = require('./data')
const Receitas = require('./receitas')
const Contatos = require('./contatos')

const API_PORT = 3001
const app = express()
app.use(cors())
const router = express.Router()

const dbRoute = 'mongodb+srv://jonatas:jota1991@cluster0-qekd9.mongodb.net/svcopia?retryWrites=true&w=majority';

mongoose.connect(dbRoute, { useNewUrlParser: true })

let db = mongoose.connection

db.once('open', () => console.log('db connected'))

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// this is our get method
// this method fetches all available data in our database
router.get('/getData', (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.get('/getReceitas', (req, res) => {
  Receitas.find( (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
})

// this is our update method
// this method overwrites existing data in our database
router.post('/updateData', (req, res) => {
  const { id, update } = req.body;
  Data.findByIdAndUpdate(id, update, (err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete('/deleteData', (req, res) => {
  const { id } = req.body;
  Data.findByIdAndRemove(id, (err) => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create methid
// this method adds new data in our database
router.post('/putData', (req, res) => {
  let data = new Data();

  const { id, message } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: 'INVALID INPUTS',
    });
  }
  data.message = message;
  data.id = id;
  data.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

//create contaot
router.post('/putContato', (req, res) => {
  let contato = new Contatos();

  const { nome, email, mensagem, assunto, cidade, estado } = req.body;

  if (!mensagem || !nome || !email || !assunto) {
    return res.json({
      success: false,
      error: 'Preencha todos os campos obrigatórios',
    });
  }
  contato.nome = nome;
  contato.email = email;
  contato.cidade = cidade;
  contato.estado = estado;
  contato.mensagem = mensagem;
  contato.assunto = assunto;
  contato.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
