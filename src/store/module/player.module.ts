// Generated from Vuex Module template


import {IArmy} from "@/model/army/army";
import {IFaction} from "@/model/faction/faction";
import {IGame} from "@/model/game/game";
import {AxiosError, AxiosResponse} from "axios";
import {ActionContext, ActionTree, GetterTree, MutationTree} from "vuex";
import {IPlayer, PlayerVO} from "@/model/player";
import {playerService} from "@/service/player.service";

import {ActionTypes as action} from "../actionTypes";
import {MutationTypes as mutate} from "../mutationTypes";

//////////////////////////////////////////////////////////////////////////////////////////////////
//  STATE
interface IState extends IPlayer
{
	games: IGame[];
	factions: IFaction[];
	armies: IArmy[];
}

const _state:IState = {
	name: "",
	id: "",
	games: [],
	factions: [],
	armies: [],
};


//////////////////////////////////////////////////////////////////////////////////////////////////
//  GETTERS

// type Getters = createMutableType<IState>;
interface IGetters {
	name(state:IState):string;
}

const _getters: GetterTree<any, any> & IGetters = {
	name: (state:IState) => state.name,
};


//////////////////////////////////////////////////////////////////////////////////////////////////
//  Mutations
interface IMutations<S = IState>{
	[mutate.SET_PLAYER]: (state:S, payload:IPlayer) => void;
}

const _mutations: MutationTree<any> & IMutations = {
	[mutate.SET_PLAYER] (state: IState, payload:IPlayer) {
		state.name = payload.name;
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
					commit(mutate.SET_PLAYER, new PlayerVO(response.data.player));
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

