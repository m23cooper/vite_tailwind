import { createStore, createLogger } from 'vuex'

// const debug = process.env.NODE_ENV !== 'production'
const debug = true;

export default createStore({
	modules: {

	},
	strict: debug,
	plugins: debug ? [createLogger()] : []
})
