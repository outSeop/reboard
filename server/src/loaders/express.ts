import bodyParser from 'body-parser';

function expressLoader(app: any) {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true}));
	app.get('/', (req: any, res: any) => {
		res.send({hello: 'world'});
	});
}

export default expressLoader;