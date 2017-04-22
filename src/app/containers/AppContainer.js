import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'

class AppContainer extends React.Component {
	
	static propTypes = {
		routes: React.PropTypes.object.isRequired,
		store: React.PropTypes.object.isRequired
	};

	shouldComponentUpdate() {
		return false;
	}

	render() {

		const { routes, store } = this.props;

		return (
			<Provider store={store}>
				<Router history={browserHistory} children={routes} />
			</Provider>
		);

	}
}

export default AppContainer;
