import {
	createStore,
	createLogger,
	MutationTree,
	GetterTree,
	ActionTree, ActionContext,
	Store as VuexStore,
	CommitOptions,
	DispatchOptions,
} from 'vuex'
import Device from "./device.module";
import Player from "./player.module";


import { MutationTypes as mutate } from './mutation';
import { ActionTypes as action } from './actions';

import { config } from '../config';
import { createType, createMutableType } from "../utils/utils";

// const debug = process.env.NODE_ENV !== 'production'
const debug = true;


//////////////////////////////////////////////////////////////////////////////////////////////////
//  STATE

interface IState
{
	readonly _privateKey: string;
	isFullscreen: boolean;
}

const _state:IState = {
	_privateKey: "Root Store",

	isFullscreen: false,
};


//////////////////////////////////////////////////////////////////////////////////////////////////
//  GETTERS

// type Getters = createMutableType<IState>;
interface IGetters {
	isFullscreen(state:IState):void
}

const _getters: GetterTree<any, any> & IGetters = {
	isFullscreen: (state:IState) => state.isFullscreen,
};

//////////////////////////////////////////////////////////////////////////////////////////////////
//  ACTIONS
type AugmentedActionContext = {
	commit<K extends keyof IMutations>(
		key: K,
		payload: Parameters<IMutations[K]>[1]
	): ReturnType<IMutations[K]>
} & Omit<ActionContext<IState, IState>, 'commit'>

interface Actions {
	[action.CLEAR_UI](
		{ commit }: AugmentedActionContext,
		payload: any
	): Promise<number>,
}

const _actions: ActionTree<any, any> & Actions = {
	[action.CLEAR_UI] ({ commit, }, payload:any )
	{
		console.log("action CLEAR_UI", payload.alias);
		return new Promise((resolve) => {
			commit(mutate.CLEAR_UI, payload);
			resolve(payload);
		})
	},
};

//////////////////////////////////////////////////////////////////////////////////////////////////
//  Mutations
interface IMutations<S = IState>  {
	[mutate.CLEAR_UI] (state:S, payload:any):void,
}

const _mutations: MutationTree<any> & IMutations = {
	[mutate.CLEAR_UI] (state: IState, payload:any) {
		console.log ("CLEAR_UI", payload.alias);
	},
};

//////////////////////////////////////////////////////////////////////////////////////////////////
//  modules
const _modules = {
	"device": Device,
	"player": Player,
};



//////////////////////////////////////////////////////////////////////////////////////////////////
//  CONSTRUCTOR
const _store:VuexStore<any> = createStore({
	state: () => _state,
	getters: _getters,
	actions: _actions,
	mutations: _mutations,
	modules: _modules,
	strict: debug,
	plugins: debug ? [createLogger()] : []
})

export function useStore():any
{
	return _store;
}

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
