// Generated from Vue VO template
//////////////////////////////////////////////////////////////////////////////////////////////////
//  IMPORTS

//////////////////////////////////////////////////////////////////////////////////////////////////
//  Player
import {GameVO, IGame} from "@/model/game/game";

export interface IPlayer
{
	ID: string;
	name: string;
	games?: IGame[];
}

export class PlayerVO implements IPlayer
{
	readonly ID:string;
	readonly name:string;
	readonly games:IGame[];

	constructor(data: IPlayer)
	{
		if (!data) throw new Error("data IPlayer is empty in PlayerVO constructor");
		this.ID = data.ID;
		this.name = data.name;
		this.games = !data.games ? [] : data.games.map( (data:IGame) => new GameVO(data) );
	}
}
