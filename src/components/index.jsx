import React from 'react';
import ReactDOM from 'react-dom';

import "babel-polyfill";

class Index extends React.Component {
	render() {
		return (
			<html>
				<body>
					<div id="root">
						<h1>hiiiiiii</h1>
					</div>
				</body>
			</html>
		);
	}
}

ReactDOM.render(
	<Index/>, 
	document.getElementById('root')
);