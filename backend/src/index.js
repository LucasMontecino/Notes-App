require('dotenv').config();
const app = require('./app');
require('./db');
const port = app.get('port');

async function main() {
    await app.listen(port);
    console.log(`server on port ${port}`);
};

main();