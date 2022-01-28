import Bowser from "bowser";
import _ from "lodash-es";

import { MutationTypes as mutate } from './mutation-types';

// import { skin } from '~config';

// initial state
const state = () => ({
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
});

// getters
const getters = {
	isMobile: (state, getters) => state.isMobile,
	isiOS: (state, getters) => state.isiOS,
	isIE11: (state, getters) => state.isIE11,
	isFirefox: (state, getters) => state.isFirefox,
	isSafariBrowser: (state, getters) => state.isSafariBrowser,
	isSM: (state, getters) => state.isSM,
	isMD: (state, getters) => state.isMD,
	isLG: (state, getters) => state.isLG,
	isXL: (state, getters) => state.isXL,
	isPortrait: (state, getters) => state.isPortrait,
	isLandscape: (state, getters) => state.isLandscape,
	urlParams: (state, getters) => state.urlParams,
};

// actions
const actions = {
	initDevice ({ commit, state, })
	{
		console.log("initDevice");
		[
			{test: "(min-width: 576px)", mutation: mutate.IS_SM_UPDATED,},
			{test: "(min-width: 768px)", mutation: mutate.IS_MD_UPDATED,},
			{test: "(min-width: 1057px)", mutation: mutate.IS_LG_UPDATED,},
			{test: "(min-width: 1234px)", mutation: mutate.IS_XL_UPDATED,},
		].map(breakpoint => {
			breakpoint.check = window.matchMedia(breakpoint.test);
			breakpoint.check.addListener((mediaQueryList) => commit(breakpoint.mutation, {mediaQueryList: mediaQueryList, }));
			commit(breakpoint.mutation, {mediaQueryList: breakpoint.check, });
		});

		[
			{test: "(orientation: portrait)", mutation: mutate.IS_PORTRAIT,},
			{test: "(orientation: landscape)", mutation: mutate.IS_LANDSCAPE,},
		].map(orientation => {
			orientation.check = window.matchMedia(orientation.test);
			orientation.check.addListener((mediaQueryList) => commit(orientation.mutation, {mediaQueryList: mediaQueryList, }));
			commit(orientation.mutation, {mediaQueryList: orientation.check, });
		});

		const query = window.location.search.substring(1);
		const params = _.fromPairs(_.map(query.split("&"), param => param.split("=")));

		commit(mutate.URL_PARAMS_UPDATED, {params: params,});

		commit(mutate.DEVICE_UPDATED, {outputs: Bowser.parse(window.navigator.userAgent),});
	},
};

// mutations
const mutations = {
	[mutate.IS_SM_UPDATED] (state, { mediaQueryList, }) {
		state.isSM = mediaQueryList.matches;
	},
	[mutate.IS_MD_UPDATED] (state, { mediaQueryList, }) {
		state.isMD = mediaQueryList.matches;
	},
	[mutate.IS_LG_UPDATED] (state, { mediaQueryList, }) {
		state.isLG = mediaQueryList.matches;
	},
	[mutate.IS_XL_UPDATED] (state, { mediaQueryList, }) {
		state.isXL = mediaQueryList.matches;
	},
	[mutate.IS_PORTRAIT] (state, { mediaQueryList, }) {
		state.isLandscape = !(state.isPortrait = mediaQueryList.matches);
	},
	[mutate.IS_LANDSCAPE] (state, { mediaQueryList, }) {
		state.isPortrait = !(state.isLandscape = mediaQueryList.matches);
	},
	[mutate.URL_PARAMS_UPDATED] (state, { params, }) {
		state.urlParams = params;
	},
	[mutate.DEVICE_UPDATED] (state, { outputs, }) {
		state.isMobile = (outputs.platform.type === "mobile");
		state.isiOS = (outputs.os.name === "iOS");
		state.isFirefox = (outputs.browser.name === "Firefox");
		state.isSafariBrowser = (outputs.browser.name === "Safari");
		state.isIE11 = (Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject);
		let test = 0;
	},
};

export default {
	// namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
