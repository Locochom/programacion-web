import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Usuario from './models/usuario.model.js';

const app = express();
const PORT = 3000;
dotenv.config();

app.get('/', (req, res)=>{
    res.send('Bienvenidoa mi API CRUD');
});

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.post('/usuarios', async(req, res)=>{
    try{
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    }catch(error){
        console.error("Error al crear el usuario:", error);
        res.status(500).json({error:'Error al crear el usuario'});
    }
});

//Conexión a la base de datos

const uri=process.env.uri;

mongoose.connect(uri)
.then(()=>{
    console.log("Conexión exitosa a la base de datos");
})
.catch((error)=>{
    console.error("Error al conectar a la base de datos", error);
});


