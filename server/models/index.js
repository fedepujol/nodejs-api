/* No es el archivo original generado por el sequelize */
/* Se elimino gran cantidad de codigo */

import Sequelize from 'sequelize'
import configJson from '../config/config.json'

const env = process.env.NODE_ENV || 'development'
const config = configJson[env]
const db = {}

if (config.use_env_variable) {
  db.sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  db.sequelize = new Sequelize(config.database, config.username, config.password, config)
}

db.sequelize.authenticate().then(err => {
  err ? console.log(err) : console.log('Connection Successfull')
})

export default db