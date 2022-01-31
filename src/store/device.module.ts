// Generated from Vuex Module template

import Bowser from "bowser";
import {ActionContext, ActionTree, GetterTree, MutationTree} from "vuex";
import { fromPairs as _fromPairs, map as _map} from "lodash-es";

import {ActionTypes as action} from "./actions";
import {MutationTypes as mutate} from "./mutation";

//////////////////////////////////////////////////////////////////////////////////////////////////
//  STATE
interface IState
{
	isMobile: boolean;
	isiOS: boolean;
	isIE11: boolean;
	isFirefox: boolean;
	isSafariBrowser: boolean;
	isSM: boolean;
	isMD: boolean;
	isLG: boolean;
	isXL: boolean;
	isPortrait: boolean;
	isLandscape: boolean;
	urlParams: any,
}

const _state:IState = {
	isMobile: false,
	isiOS: false,
	isIE11: false,
	isFirefox: false,
	isSafariBrowser: false,
	isSM: false,
	isMD: false,
	isLG: false,
	isXL: false,
	isPortrait: false,
	isLandscape: false,
	urlParams: {},
};

//////////////////////////////////////////////////////////////////////////////////////////////////
//  GETTERS

// type Getters = createMutableType<IState>;
interface IGetters {

}

const _getters: GetterTree<any, any> & IGetters = {

};

//////////////////////////////////////////////////////////////////////////////////////////////////
//  IMutations
interface IMutations<S = IState>{
	[mutate.IS_SM_UPDATED] (state:S, mediaQueryList:any):void;
	[mutate.IS_MD_UPDATED] (state:S, mediaQueryList:any):void;
	[mutate.IS_LG_UPDATED] (state:S, mediaQueryList:any):void;
	[mutate.IS_XL_UPDATED] (state:S, mediaQueryList:any):void;
	[mutate.IS_PORTRAIT] (state:S, mediaQueryList:any):void;
	[mutate.IS_LANDSCAPE] (state:S, mediaQueryList:any):void;
	[mutate.URL_PARAMS_UPDATED] (state:S, payload:any):void;
	[mutate.DEVICE_UPDATED] (state:S, payload:any):void;
}

const _mutations: MutationTree<any> & IMutations = {
	[mutate.IS_SM_UPDATED] (state:IState, { mediaQueryList, }) {
		state.isSM = mediaQueryList.matches;
	},
	[mutate.IS_MD_UPDATED] (state:IState, { mediaQueryList, }) {
		state.isMD = mediaQueryList.matches;
	},
	[mutate.IS_LG_UPDATED] (state:IState, { mediaQueryList, }) {
		state.isLG = mediaQueryList.matches;
	},
	[mutate.IS_XL_UPDATED] (state:IState, { mediaQueryList, }) {
		state.isXL = mediaQueryList.matches;
	},
	[mutate.IS_PORTRAIT] (state:IState, { mediaQueryList, }) {
		state.isLandscape = !(state.isPortrait = mediaQueryList.matches);
	},
	[mutate.IS_LANDSCAPE] (state:IState, { mediaQueryList, }) {
		state.isPortrait = !(state.isLandscape = mediaQueryList.matches);
	},
	[mutate.URL_PARAMS_UPDATED] (state: IState, params:any)	{
		state.urlParams = params;
	},
	[mutate.DEVICE_UPDATED] (state: IState, outputs:any) {
		state.isMobile = (outputs.platform?.type === "mobile");
		state.isiOS = (outputs.os?.name === "iOS");
		state.isFirefox = (outputs.browser?.name === "Firefox");
		state.isSafariBrowser = (outputs.browser?.name === "Safari");
		// state.isIE11 = (Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject);
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
	[action.INIT_DEVICE](
		{ commit }: AugmentedActionContext,
	): void,
}

const _actions: ActionTree<any, any> & IActions = {
	[action.INIT_DEVICE] ({ commit, } )
	{
		console.log("initDevice");
		[
			{test: "(min-width: 576px)", mutation: mutate.IS_SM_UPDATED,},
			{test: "(min-width: 768px)", mutation: mutate.IS_MD_UPDATED,},
			{test: "(min-width: 1057px)", mutation: mutate.IS_LG_UPDATED,},
			{test: "(min-width: 1234px)", mutation: mutate.IS_XL_UPDATED,},
		].map((breakpoint:any) => {
			breakpoint.check = window.matchMedia(breakpoint.test);
			breakpoint.check.addListener((mediaQueryList:any) => commit(breakpoint.mutation, {mediaQueryList: mediaQueryList, }));
			commit(breakpoint.mutation, {mediaQueryList: breakpoint.check, });
		});

		[
			{test: "(orientation: portrait)", mutation: mutate.IS_PORTRAIT,},
			{test: "(orientation: landscape)", mutation: mutate.IS_LANDSCAPE,},
		].map((orientation:any) => {
			orientation.check = window.matchMedia(orientation.test);
			orientation.check.addListener((mediaQueryList:any) => commit(orientation.mutation, {mediaQueryList: mediaQueryList, }));
			commit(orientation.mutation, {mediaQueryList: orientation.check, });
		});

		const query = window.location.search.substring(1);
		const params = _fromPairs(_map(query.split("&"), (param:any) => param.split("=")));

		commit(mutate.URL_PARAMS_UPDATED, {params: params,});

		commit(mutate.DEVICE_UPDATED, {outputs: Bowser.parse(window.navigator.userAgent),});

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
	name:"device",
	// namespaced: true,
	state: () => _state,
	getters: _getters,
	mutations: _mutations,
	actions: _actions,
	modules: _modules,
};

