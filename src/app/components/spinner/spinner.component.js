import React from 'react';

import './spinner.component.scss';

class SpinnerComponent extends React.Component {

	render() {
		return (
			<div className="spinner text-center">
				<img src="../img/spinner.svg" />
			</div>
		);
	}
}

export default SpinnerComponent;
