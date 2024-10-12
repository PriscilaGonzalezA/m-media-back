#!/bin/bash

# Cargar variables de entorno desde el archivo .env
source .env

echo "Iniciando el proceso de seed..."

node src/seed/index.js

echo "Proceso de seed finalizado."