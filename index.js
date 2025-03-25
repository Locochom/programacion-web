import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
const app = express();
const PORT = 3000;
const recetaJSON=`[
    {
      "id": "0001",
      "tipo": "taco",
      "nombre": "Taco al pastor",
      "precio": 18.50,
      "ingredientes": {
        "proteina": {
          "nombre": "Cerdo",
          "preparacion": "Adobado y asado"
        },
        "salsa": {
          "nombre": "Piña y chile guajillo",
          "picor": "Alto"
        }
      },
      "acompañamientos": [
        {
          "nombre": "Cebolla y cilantro",
          "cantidad": "1 cucharada",
          "ingredientes": ["Cebolla blanca", "Cilantro", "Limón"]
        }
      ]
    },
    {
      "id": "0002",
      "tipo": "taco",
      "nombre": "Taco de barbacoa",
      "precio": 22.00,
      "ingredientes": {
        "proteina": {
          "nombre": "Carne de borrego",
          "preparacion": "Cocida al vapor"
        },
        "salsa": {
          "nombre": "Salsa roja",
          "picor": "Alto"
        }
      },
      "acompañamientos": [
        {
          "nombre": "Rábano y cilantro",
          "cantidad": "1 cucharada",
          "ingredientes": ["Rábano", "Cilantro", "Limón", "Sal"]
        }
      ]
    },
    {
      "id": "0003",
      "tipo": "taco",
      "nombre": "Taco de bistec",
      "precio": 19.00,
      "ingredientes": {
        "proteina": {
          "nombre": "Res",
          "preparacion": "Asado"
        },
        "salsa": {
          "nombre": "Verde con aguacate",
          "picor": "Medio"
        }
      },
      "acompañamientos": [
        {
          "nombre": "Cebolla y nopales",
          "cantidad": "2 cucharadas",
          "ingredientes": ["Cebolla morada", "Nopales", "Sal", "Cilantro"]
        }
      ]
    },
    {
      "id": "0004",
      "tipo": "taco",
      "nombre": "Taco dorado",
      "precio": 22.00,
      "ingredientes": {
        "proteina": {
          "nombre": "Pollo",
          "preparacion": "Frito"
        },
        "salsa": {
          "nombre": "Salsa de tomate",
          "picor": "No picante"
        }
      },
      "acompañamientos": [
        {
          "nombre": "Media crema y Queso",
          "cantidad": "3 cucharadas",
          "ingredientes": ["Media Crema", "Queso Sopero", "Romana"]
        }
      ]
    }
  ]
`;

const receta=JSON.parse(recetaJSON);
app.use(express.static("public"));
app.use(bodyParser.json());

app.get('/receta/:type', (req, res) => {
  const elegirTaco = receta.find(r => r.ingredientes.proteina.nombre.toLowerCase() === req.params.type.toLowerCase());
  res.json(elegirTaco || { error: "Receta no encontrada" });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));


