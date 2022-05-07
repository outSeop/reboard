const express = require('express');
var router = express.Router();
var Post = require('../models/Post');

class PostRouter {
	routeIndex() {
		app.get('/api/main', (req, res) => {
			res.send("test");
		})
	}
	
	routeNew() {
		
	}
	
	routeCreate() {
		
	}
	
	routeShow() {
		
	}
	
	routeEdit() {
		
	}
	
	routeUpdate() {
		
	}
	
	routeDestory() {
		
	}
}

exports.PostRouter = PostRouter;