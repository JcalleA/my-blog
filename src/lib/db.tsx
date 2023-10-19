import {createPool} from 'mysql2/promise'

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'academia_api',
    waitForConnections: true
});

export default pool