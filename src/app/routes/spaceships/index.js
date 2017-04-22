import { injectReducer } from '../../store/reducers';

export function ListView(store) {

	return {
		path: '/spaceships',
		/*  Async getComponent is only invoked when route matches   */
		getComponent: function (nextState, cb) {

			/*  Webpack - use 'require.ensure' to create a split point
			and embed an async module loader (jsonp) when bundling   */
			require.ensure([], (require) => {

				/*  Webpack - use require callback to define
				dependencies for bundling   */
				const container = require('./containers/list.container.js').default;
				const reducer = require('./modules/reducer').default;

				/*  Add the reducer to the store on key 'counter'  */
				injectReducer(store, { key: 'spaceships', reducer });

				/*  Return getComponent   */
				cb(null, container);

				/* Webpack named bundle   */
			}, 'spaceships');

		}
	};

}

export function DetailsView(store) {

	return {
		path: '/spaceships/:id',
		/*  Async getComponent is only invoked when route matches   */
		getComponent: function (nextState, cb) {

			/*  Webpack - use 'require.ensure' to create a split point
			and embed an async module loader (jsonp) when bundling   */
			require.ensure([], (require) => {

				/*  Webpack - use require callback to define
				dependencies for bundling   */
				const container = require('./containers/details.container.js').default;
				const reducer = require('./modules/reducer').default;

				/*  Add the reducer to the store on key 'counter'  */
				injectReducer(store, { key: 'spaceshipDetails', reducer });

				/*  Return getComponent   */
				cb(null, container);

				/* Webpack named bundle   */
			}, 'spaceshipDetails');

		}
	};

}
