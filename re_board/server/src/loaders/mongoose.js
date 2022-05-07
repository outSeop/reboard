const mongoose = require('mongoose');

async function mongooseLoader() {
	const connetcion = 
		  await mongoose.connect("mongodb+srv://inssong:seop@cluster0.5wcrw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
	return connetcion.connetcion;
}
exports.mongooseLoader = mongooseLoader;