import { createStore, createLogger } from 'vuex'
import { IPlayer, PlayerVO} from "../model/player"
import device from "./device.module";


import { MutationTypes as mutate } from './mutation-types';

import { config } from '../config';

// const debug = process.env.NODE_ENV !== 'production'
const debug = true;


const _state:object = () => ({
	isFullscreen: false,
});

const _getters = {
	isFullscreen: (state, getters) => state.isFullscreen,
};

const _actions = {
	initUI ({ commit, rootState,  })
	{
		console.log("initUI");

		//  init state & store localStorage variables
		// commit(types.LOBBY_TICKETS_TOGGLED, { show: Lockr.get("showLobbyTickets", true), });
		// commit(types.LOBBY_INSTANTS_TOGGLED, { show: Lockr.get("showLobbyInstants", true), });
	},
};

const _mutations = {
	[mutate.CLEAR_UI] (state) {
		// if(state.showBingoView) state.showBingoView = false;
		// if(state.showGameView) state.showGameView = false;
		// if(state.isFullscreen) state.isFullscreen = false;
	},
};

const _modules = {
	device
};

export default createStore({
	state: _state,
	getters: _getters,
	actions: _actions,
	mutations: _mutations,
	modules: _modules,
	strict: debug,
	plugins: debug ? [createLogger()] : []
})
