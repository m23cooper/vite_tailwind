import {
	createStore,
	createLogger,
	MutationTree,
	GetterTree,
	ActionTree, ActionContext,
	Store as VuexStore,
	CommitOptions,
	DispatchOptions,} from 'vuex'
import { IPlayer, PlayerVO} from "../model/player"
import device from "./device.module";


import { MutationTypes as mutate } from './mutation';
import { ActionTypes as action } from './actions';

import { config } from '../config';

// const debug = process.env.NODE_ENV !== 'production'
const debug = true;


//////////////////////////////////////////////////////////////////////////////////////////////////
//  STATE

const _state = {
	isFullscreen: false,
};

type State = typeof _state;
let test = typeof _state;

//////////////////////////////////////////////////////////////////////////////////////////////////
//  GETTERS
type  Getters = {
	isFullscreen(state: State): number
}
// const _getters: GetterTree<State, State> & Getters = {
// 	isFullscreen: (state:State) => state.isFullscreen,
// };

const _getters: Getters = {
	isFullscreen: (state:State) => state.isFullscreen,
};

//////////////////////////////////////////////////////////////////////////////////////////////////
//  ACTIONS
type AugmentedActionContext = {
	commit<K extends keyof Mutations>(
		key: K,
		payload: Parameters<Mutations[K]>[1]
	): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

interface Actions {
	[action.CLEAR_UI](
		{ commit }: AugmentedActionContext,
		payload: number
	): Promise<number>,
}

const _actions: ActionTree<State, State> & Actions = {
	[action.CLEAR_UI] ({ commit, }, payload:number )
	{
		return new Promise((resolve) => {
			commit(mutate.CLEAR_UI, payload);
			resolve(payload);
		})
	},
};

//////////////////////////////////////////////////////////////////////////////////////////////////
//  Mutations
type Mutations<S = State> = {
	[mutate.CLEAR_UI] (state:S, payload:number):void
}

const _mutations: MutationTree<State> & Mutations = {
	[mutate.CLEAR_UI] (state: State, payload:number) {
		// if(state.showBingoView) state.showBingoView = false;
		// if(state.showGameView) state.showGameView = false;
		// if(state.isFullscreen) state.isFullscreen = false;
	},
};

//////////////////////////////////////////////////////////////////////////////////////////////////
//  modules
const _modules = {
	// device
};

//////////////////////////////////////////////////////////////////////////////////////////////////
//  CONSTRUCTOR
export default createStore({
	state: _state,
	getters: _getters,
	actions: _actions,
	mutations: _mutations,
	modules: _modules,
	strict: debug,
	plugins: debug ? [createLogger()] : []
})

// type Store = Omit<
// 	VuexStore<State>,
// 	'getters' | 'commit' | 'dispatch'
// 	> & {
// 	commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
// 		key: K,
// 		payload: P,
// 		options?: CommitOptions
// 	): ReturnType<Mutations[K]>
// } & {
// 	dispatch<K extends keyof Actions>(
// 		key: K,
// 		payload: Parameters<Actions[K]>[1],
// 		options?: DispatchOptions
// 	): ReturnType<Actions[K]>
// } & {
// 	getters: {
// 		[K in keyof Getters]: ReturnType<Getters[K]>
// 	}
// }
