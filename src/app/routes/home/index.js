import { injectReducer } from '../../store/reducers';

export default (store) => ({
	path: '',
	/*  Async getComponent is only invoked when route matches   */
	getComponent: function (nextState, cb) {

		/*  Webpack - use 'require.ensure' to create a split point
			and embed an async module loader (jsonp) when bundling   */
		require.ensure([], (require) => {

			/*  Webpack - use require callback to define
				dependencies for bundling   */
			const Home = require('./containers/home.container.js').default
			const reducer = require('./modules/reducer').default

			/*  Add the reducer to the store on key 'counter'  */
			injectReducer(store, { key: 'home', reducer })

			/*  Return getComponent   */
			cb(null, Home)

			/* Webpack named bundle   */
		}, 'home');
	},
	onEnter: function (nextState, replace, callback) {

		replace('/spaceships');

		callback();

	}
})

