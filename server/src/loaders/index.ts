import expressLoader from "./express";
import mongooseLoader from "./mongoose";

async function loader(app: any) {
	const mongooseConnection = await mongooseLoader();
	console.log('Database Initialized');

	await expressLoader(app);
	console.log('Express Initialized');
}

export default loader;
