// Generated from Vuex Module template


import {AxiosError, AxiosResponse} from "axios";
import {ActionContext, ActionTree, GetterTree, MutationTree} from "vuex";
import {IPlayer} from "@/model/player";
import {playerService} from "@/service/player.service";

import {ActionTypes as action} from "./actions";
import {MutationTypes as mutate} from "./mutation";

//////////////////////////////////////////////////////////////////////////////////////////////////
//  STATE
interface IState extends IPlayer
{

}

const _state:IState = {
	alias: "",
	id: "",
	games: [],
	factions: [],
	armies: [],
};


//////////////////////////////////////////////////////////////////////////////////////////////////
//  GETTERS

// type Getters = createMutableType<IState>;
interface IGetters {
	alias(state:IState):string;
}

const _getters: GetterTree<any, any> & IGetters = {
	alias: (state:IState) => state.alias,
};


//////////////////////////////////////////////////////////////////////////////////////////////////
//  Mutations
interface IMutations<S = IState>{
	[mutate.SET_PLAYER] (state:S, payload:IPlayer):void
}

const _mutations: MutationTree<any> & IMutations = {
	[mutate.SET_PLAYER] (state: IState, payload:IPlayer) {
		state.alias = payload.alias;
		state.id = payload.id;
	},
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
		player_id: string,
	): Promise<any>,
}

const _actions: ActionTree<any, any> & IActions = {
	[action.GET_PLAYER] ({ commit, dispatch, }, player_id:string )
	{
		return playerService.getPlayerDetails(player_id)
			.then(
				(response: AxiosResponse) => {
					commit(mutate.SET_PLAYER, response.data as IPlayer);
				},
				(error: AxiosError) => {
					dispatch(action.REPORT_ERROR, error);
				}
			)
		;
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
	name:"player",
	// namespaced: true,
	state: () => _state,
	getters: _getters,
	mutations: _mutations,
	actions: _actions,
	modules: _modules,
};

