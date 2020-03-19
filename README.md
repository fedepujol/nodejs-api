# RESTful API

## General
Api ejemplo en NodeJS que se comunica con una base PostgreSQL.

### Estructura
#### Master
```
|-app
    |- controllers
    |- db
    |- routes
    |- utils
```

#### ORM
```
|-app
    |- controllers
    |- services
    |- routes
    |- utils
    |- domain
|-server
    |- config
    |- models
    |- seeders
    |- migrations
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

### Branches

#### Master
Se habla con la base directamente desde el UserController por medios de queries hardcodeadas:

```sql
SELECT * FROM users ORDER BY id ASC;
```

#### ORM
Se emplea el uso de sequelize para hablar con la base. Se crea el UserService como medio de traspaso de datos.

```js
    async allUsers() {
        try {
            return await User.findAll()
        } catch (error) {
            throw error
        }
    }
```
