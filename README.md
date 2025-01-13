<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Nest: Desarrollo backend escalable con Node (POKEDEX)

## Acerca de

Este es un repositorio personal para ejecución del proyecto del curso **NestJS: Desarrollo backend escalable con Node** de **Fernando Herrera** en la plataforma de Udemy. Para acceder al curso completo puede hacer [clic aquí](https://www.udemy.com/course/nest-framework/)

El proyecto desarrollado a continuación explora la creación de un CRUD básico con conexión a una base de datos Mongo para aplicar los conceptos iniciales del framework para backend Nest:

**Conceptos aplicados**

- Servir contenido estático
- Conexión a BD Mongo usando adaptador de NestJS
- Class Validator
- Custom Pipes
- SEED
- Importación de módulos

## Requerimientos

- Node v22.12.0 LTS

## Instalación del proyecto

Para instalar el proyecto siga los siguientes pasos

Instalar módulos o dependencias

```bash
$ npm install
```

Instalar Nest CLI (para desarrollo)

```bash
$ npm i -g @nestjs/cli
```

## Ejecución del proyecto

Para ejecutar el proyecto se deben seguir los siguientes pasos:

1. Levantar la base de datos

```bash
# docker
$ docker compose up -d
```

2. Ejecutar el SEED para la carga de datos iniciales en la BD

```
http://localhost:3000/api/v1/seed
```

2. Correr el proyecto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

```

### Información adicional

Para aprender más acerca de Nest, visite los siguientes recursos:

- Visite la [documentación de NestJS](https://docs.nestjs.com) para aprender más del framework
- Para adquirir cursos oficiales de NestJS, haga clic aquí [clic aquí](https://courses.nestjs.com/).
