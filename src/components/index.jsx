import React from 'react';
import ReactDOM from 'react-dom';

class Index extends React.component {
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