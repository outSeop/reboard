const loaders = require('./loaders');
const express = require('express');

const port = 3000;

async function startServer() {
	const app = express();
	await loaders.loaders(app);
	
	app.listen(port, (err) => {
		if (err) {
			console.log(err);
			return ;
		}
		console.log('Server is ready');
	});
}

startServer();