import mongoose from 'mongoose';

async function mongooseLoader() {
	const connection = await mongoose.connect("mongodb+srv://inssong:seop@cluster0.5wcrw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
	return connection.connection;
}

export default mongooseLoader;