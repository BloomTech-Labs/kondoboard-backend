//Program Setup
const server = require('./src/api/server');

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => {
	console.log(`\n\n ~~~ Server listening on port ${PORT} ~~~\n\n`);
});
