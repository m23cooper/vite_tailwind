// Generated from Vue VO template
//////////////////////////////////////////////////////////////////////////////////////////////////
//  IMPORTS

//////////////////////////////////////////////////////////////////////////////////////////////////
//  Player
export interface IPlayer
{
	id: string;
	name: string;
	games?: IGame[];
}

export class PlayerVO implements IPlayer
{
	readonly id:string;
	readonly name:string;
	readonly games:IGame[];

	constructor(data: IPlayer)
	{
		if (!data) throw new Error("data IPlayer is empty in PlayerVO constructor");
		this.id = data.id;
		this.name = data.name;
		this.games = !data.games ? [] : data.games.map( (data:IGame) => new GameVO(data) );
	}
}
