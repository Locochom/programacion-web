#!/bin/bash
#----comandos sin verificacion de errores
#Nombre del proyecto
read -p "Nombre del proyecto: " nombre

#crear carpeta del proyecto
mkdir $nombre
cd $nombre

#inicializar npm
npm init -y

#instalar dependencias
npm install express body-parser

#Agregar "type": "module" al package.json
sed -i '5i\ "type": "module",' package.json

#crear estructuras de archivos
mkdir public
New-Item index.js
echo "import express from 'express';" >> index.js
echo "import path from 'path';" >> index.js
echo "const app = express();" >> index.js
echo "const PORT = 3000;" >> index.js
echo "app.use(bodyParser.urlencoded({ extended: true }));" >> index.js
echo "app.use(express.static(path.join(__dirname, 'public')));" >> index.js
echo "app.listen(PORT, () => console.log(\Servidor escuchando en http://localhost:\${PORT}\));" >> index.js
echo "Proyecto '$nombre' creado con exito."


#chmod +x deploy.sh para dar permisos de ejecucion 
#./deploy.sh para ejecutar el script
# sudo mv deploy.sh /usr/local/bin/deploy para mover el script a la carpeta de comanodos
# deploy para ejecutar el script