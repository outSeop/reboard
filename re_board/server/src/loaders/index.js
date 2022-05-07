const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');

async function loaders(app) {
	const mongooseConnection = await mongooseLoader.mongooseLoader();
	console.log('Database Intialized');
	await expressLoader.expressLoader(app);
	console.log('Express Intialized');
}

exports.loaders = loaders;
