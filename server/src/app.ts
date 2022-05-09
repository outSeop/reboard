import loader from "./loaders";
import express from 'express';

const port = 3000;

async function startServer() {
	const app = express();
	await loader(app);

	app.listen(port, () => {
		console.log('Server is ready');
	});
}

startServer()