import express from 'express';
import dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';


const app = express();
const PORT = 3000;
dotenv.config();

app.get('/', (req, res)=>{
    res.send('Bienvenidoa mi API CRUD');
});

app.listen(PORT, async () => {
    await conectarDB();
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

//Crear Usuario
app.post('/usuarios', async (req, res) => {
    try {
        const resultado = await db.collection('usuarios').insertOne(req.body);
        res.status(201).json(resultado.ops?.[0] || req.body);
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
});

//Actualizar Ususario
app.put('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await db.collection('usuarios').updateOne(
            { _id: new ObjectId(id) },
            { $set: req.body }
        );
        if (resultado.matchedCount === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        const usuarioActualizado = await db.collection('usuarios').findOne({ _id: new ObjectId(id) });
        res.status(200).json(usuarioActualizado);
    } catch (error) {
        console.error("Error al actualizar el usuario:", error);
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
});

//Eliminar Usuario
app.delete('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await db.collection('usuarios').deleteOne({ _id: new ObjectId(id) });
        if (resultado.deletedCount === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
        console.error("Error al eliminar el usuario:", error);
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
});

//Buscar Ususarios
app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await db.collection('usuarios').find().toArray();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});

//Buscar Ususarios por ID
app.get('/usuarios/:id', async (req, res) => {
    try {
        const usuario = await db.collection('usuarios').findOne({ _id: new ObjectId(req.params.id) });
        res.status(200).json(usuario);
    } catch (error) {
        console.error("Error al obtener el usuario:", error);
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
});



//Conexión a la base de datos

const uri = process.env.uri;
const client = new MongoClient(uri);
let db;

async function conectarDB() {
    try {
        await client.connect();
        db = client.db('test');
        console.log("Conexión exitosa a la base de datos");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
}


