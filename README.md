# RESTful API

## General
Api ejemplo en NodeJS que se comunica con una base PostgreSQL.

### Estructura
```
|-app
    |- controllers
    |- db
    |- routes
    |- utils
```

### Herramientas
Se utilizaron las siguientes herramientas:
- ExpressJS
    - NodeJS framework para crear APIs.
- PG
    - Comunicacion con la base PostgreSQL.
- Sequelize
    - ORM para NodeJS.
- Nodemon
    - Deamon que escucha cambios hechos en los archivos y re-carga automaticamente la API.
- Body Parser
    - Parsea los cuerpos de las llamadas.

### Branch ORM
Migrar las query en hardcode usando Sequelize.
