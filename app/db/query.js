import pool from '../db/connect'

/**
 * 
 * @param {object} queryText
 * @param {object} params
 * 
 */
function dbQuery(queryText, params) {
    return new Promise((resolve, reject) => {        
        pool.query(queryText, params, (err, results) => {
            if (err) {
                console.log(err)
                reject(err)
            }
            resolve(results)
        })
    })
}

export default dbQuery