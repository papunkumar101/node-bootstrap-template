import mysql from 'mysql2';
import util from 'util';
import config from 'config';
import logger from '../logs/logger.log.js';

/**
 * MySQL Class for DB connection availability
 * It's follows Singlton Design Pattern
 * 
 * Once the connection is made it is stored in the conenction pool
 * and when ever is need it is being pulled and used 
 * 
 * Only 1 object of this class is created 
 */
class MySqlSingelton {

    constructor() {
        this.mySqlPool = mysql.createPool({
            connectionLimit: parseInt(config.get('mysql').pool_con_limit),
            host: config.get('mysql').host,
            user: config.get('mysql').username,
            password: config.get('mysql').password,
            database: config.get('mysql').db_name,
            timezone: 'Z',
            charset: 'utf8mb4'
        });
    }

    static getInstance() {
        if (!this.mySqlPool) {
            this.mySqlPool = new MySqlSingelton().mySqlPool;
        }

        this.mySqlPool.getConnection(function (err, connection) {
            if (err) {
                if (err.code === 'PROTOCOL_CONNECTION_LOST') { 
                    logger.error(`MYSQL database connection was closed : ${err}`);
                }
                if (err.code === 'ER_CON_COUNT_ERROR') {
                     logger.error(`MYSQL has too many connections : ${err}`);
                }
                if (err.code === 'ECONNREFUSED') {
                    logger.error(`MYSQL database connection was refused : ${err}`);
                }
            }
            if (connection) connection.release();
        });

        // Refactoring MySQL to Node.js 8’s Async/Await
        this.mySqlPool.query = util.promisify(this.mySqlPool.query);
        return this.mySqlPool;
    }
}
 
export default MySqlSingelton;