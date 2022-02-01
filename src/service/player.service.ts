// Generated from Vuex Service template

import { useAxios } from '@/axios';
import { AxiosInstance } from "axios";

//////////////////////////////////////////////////////////////////////////////////////////////////

const _axios:AxiosInstance = useAxios();

//////////////////////////////////////////////////////////////////////////////////////////////////

export interface IPlayerService
{
	getPlayerDetails: (player_id:string) => Promise<any>;
	setInstantGameFavourite: (player_id:string, id:string, favourite:boolean | number) => Promise<any>;
}

const _playerService:IPlayerService = {

	getPlayerDetails: function(player_id:string):Promise<any>
	{
		return _axios.get(`/player/${player_id}/details`, {})
	},

	setInstantGameFavourite: function(player_id:string, id:string, favourite:boolean | number):Promise<any>
	{
		//  enforce data type expected
		favourite = (favourite) ? 1 : 0
		return _axios.post(`/instant-game/${id}/favourite?player_id=${player_id}&value=${favourite}`, {});
	},
}

//////////////////////////////////////////////////////////////////////////////////////////////////

export const playerService:IPlayerService = _playerService;
