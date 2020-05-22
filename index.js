//Program Setup
const server = require('./src/api/server');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
	console.log(`\n\n ~~~ Server listening on port ${PORT} ~~~\n\n`);
});
