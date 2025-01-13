# Usa la imagen base de Node.js
FROM node:18-alpine3.15

# Define variables de entorno
ENV NODE_ENV=production

# Crea el directorio de trabajo
WORKDIR /var/www/pokedex

# Copia solo los archivos necesarios para instalar dependencias
COPY package.json tsconfig.json tsconfig.build.json ./

# Instala dependencias de producción
RUN npm install --production

# Copia el resto de los archivos del proyecto
COPY . .

# Construye la aplicación
RUN npm run build

# Crea un usuario para la aplicación
RUN adduser --disabled-password pokeuser && \
  chown -R pokeuser:pokeuser /var/www/pokedex
USER pokeuser

# Expone el puerto de la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "start:prod"]