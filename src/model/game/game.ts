// Generated from Vue VO template
//////////////////////////////////////////////////////////////////////////////////////////////////
//  IMPORTS

//////////////////////////////////////////////////////////////////////////////////////////////////
//  Game
export interface IGame
{
	id: string;
	name: string;
	games?: IGame[];
}

export class GameVO implements IGame
{
	readonly id:string;
	readonly name:string;
	readonly games:IGame[];

	constructor(data: IGame)
	{
		if (!data) throw new Error("data IGame is empty in GameVO constructor");
		this.id = data.id;
		this.name = data.name;
		this.games = !data.games ? [] : data.games.map( (data:IGame) => new GameVO(data) );
	}
}
