const express = require('express');
const bodyParser = require('body-parser');

function expressLoader(app) {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.get('/', (req, res) => {
		res.send({hell: 'hell'});
	})
	app.get('/api/main', (req, res) => {
		res.send({test: 'test'});
	})
}

exports.expressLoader = expressLoader;