// Generated from Vuex Module template

import {IPlayer, PlayerVO} from "../model/player";
import {ActionContext, ActionTree, createLogger, createStore, GetterTree, MutationTree} from "vuex";

import {ActionTypes as action} from "./actions";
import {MutationTypes as mutate} from "./mutation";

//////////////////////////////////////////////////////////////////////////////////////////////////
//  STATE
interface IState
{
	readonly _privateKey: string;
	_playerVO: IPlayer;
}

const _state:any = {
	_privateKey: "THIS IS PRIVATE",
	_playerVO: null,
};

//////////////////////////////////////////////////////////////////////////////////////////////////
//  GETTERS

// type Getters = createMutableType<IState>;
interface IGetters {
	playerVO(state:IState):IPlayer;
	alias(state:IState):string;
}

const _getters: GetterTree<any, any> & IGetters = {
	playerVO: (state:IState) => state._playerVO,
	alias: (state:IState) => state._playerVO.alias,
};

//////////////////////////////////////////////////////////////////////////////////////////////////
//  ACTIONS

type AugmentedActionContext = {
	commit<K extends keyof IMutations>(
		key: K,
		payload: Parameters<IMutations[K]>[1]
	): ReturnType<IMutations[K]>
	} & Omit<ActionContext<IState, IState>, 'commit'>

interface IActions {
	[action.GET_PLAYER](
		{ commit }: AugmentedActionContext,
	): Promise<void>,
}

const _actions: ActionTree<any, any> & IActions = {
	[action.GET_PLAYER] ({ commit, } )
	{
		console.log("action GET_PLAYER",);
		const newPlayer:IPlayer = {id:"2", alias:"Helen"};
		return new Promise((resolve) => {
			commit(mutate.SET_PLAYER, newPlayer);
			resolve();
		})
	},
};

//////////////////////////////////////////////////////////////////////////////////////////////////
//  IMutations
interface IMutations<S = IState>{
	[mutate.SET_PLAYER] (state:S, payload:IPlayer):void
}

const _mutations: MutationTree<any> & IMutations = {
	[mutate.SET_PLAYER] (state: IState, payload:IPlayer) {
		console.log ("SET_PLAYER", payload.alias);
		state._playerVO = payload;
	},
};

//////////////////////////////////////////////////////////////////////////////////////////////////
//  modules
const _modules = {
	// device
};

//////////////////////////////////////////////////////////////////////////////////////////////////
//  CONSTRUCTOR
export default {
	name:"player.module",
	namespaced: true,
	state: () => _state,
	getters: _getters,
	actions: _actions,
	mutations: _mutations,
	modules: _modules,
};

