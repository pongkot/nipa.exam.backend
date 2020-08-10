const { mssqlConfig } = require('../common/config')

const sql = require('mssql')
const conn = sql.connect(mssqlConfig)

const insertUser = (id, name, email, dbSession = conn) => {
    return dbSession.then(pool => pool.query(`INSERT INTO nipa.[user].[user] (id, name, email) VALUES (${id}, N'${name}', N'${email}')`))
}

const selectUser = (dbSession = conn) => {
    return dbSession.then(pool => pool.query(`SELECT * FROM nipa.[user].[user]`))
}

module.exports = { insertUser, selectUser }
