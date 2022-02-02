// Generated from Vue VO template
//////////////////////////////////////////////////////////////////////////////////////////////////
//  IMPORTS

//////////////////////////////////////////////////////////////////////////////////////////////////
//  Series
export interface ISeries
{
	id: string;
	name: string;
	games?: IGame[];
}

export class SeriesVO implements ISeries
{
	readonly id:string;
	readonly name:string;
	readonly games:IGame[];

	constructor(data: ISeries)
	{
		if (!data) throw new Error("data ISeries is empty in SeriesVO constructor");
		this.id = data.id;
		this.name = data.name;
		this.games = !data.games ? [] : data.games.map( (data:IGame) => new GameVO(data) );
	}
}
