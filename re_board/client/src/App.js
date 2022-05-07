import React, { Component } from'react';
import Main from './views/Main.js';

class App extends Component {
	compnentDidMount() {
		this.callApi()
			.then((res) => {console.log('test', res)});
	}
	
	callApi = async () => {
		const response = await fetch('/api/main');
		const body = await response.json();
		return body;
	}
	render() {
		return (
			<div>
				<div>hello</div>
			</div>
		)
	}	
}
export default App;
