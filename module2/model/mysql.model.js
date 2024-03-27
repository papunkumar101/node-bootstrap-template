import mySql2 from '../config/mysql.connect.js';
// let test = new MySqlSingelton(); 
let mySql = mySql2.getInstance();

class MysqlModel {
    constructor() {
        this.initializeTables();
    }

    initializeTables() {
        this.createUsersTable();
        this.createNamesTable();
    }

    createUsersTable() {
        mySql.query('SHOW TABLES LIKE "users"', (err, results) => {
            if (err) {
                console.error(`Error checking users table existence: ${err}`);
                return;
            }

            if (results.length === 0) {
                const createTableQuery = `
                    CREATE TABLE users (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        name VARCHAR(255) NOT NULL,
                        email VARCHAR(255) NOT NULL,
                        password VARCHAR(255) NOT NULL,
                        phone VARCHAR(255) NOT NULL,
                        gender BOOLEAN NOT NULL
                    )
                `;
                mySql.query(createTableQuery, (err) => {
                    if (err) {
                        console.error(`Error creating users table: ${err}`);
                        return;
                    }
                    console.log('Users table created successfully');
                });
            } else {
                console.log('Users table already exists');
            }
        });
    }

    createNamesTable() {
        mySql.query('SHOW TABLES LIKE "names"', (err, results) => {
            if (err) {
                console.error(`Error checking names table existence: ${err}`);
                return;
            }

            if (results.length === 0) {
                const createTableQuery = `
                    CREATE TABLE names (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        name VARCHAR(255) NOT NULL
                    )
                `;
                mySql.query(createTableQuery, (err) => {
                    if (err) {
                        console.error(`Error creating names table: ${err}`);
                        return;
                    }
                    console.log('Names table created successfully');
                });
            } else {
                console.log('Names table already exists');
            }
        });
    }

    create(name) {
        const query = `
            INSERT INTO names(name) VALUES ('${name}');
        `;

        return mySql.query(query);
    }
}

export default new MysqlModel();
