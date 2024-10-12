# How to run
Para instalar las dependencias

<!-- INSTALL NODEMODULES -->
```
npm install
```

Para correr la api
```
npm run start
```

El swagger se levantará en la url:
http://localhost:8000/api-docs/

Correr el servidor de mongo
(en mi caso):
```
brew services start mongodb-community@8.0
```

Para correr los seeds y poblar la base de datos ejecutar
```
/bin/bash run-seed.sh
```
