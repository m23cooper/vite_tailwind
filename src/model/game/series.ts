// Generated from Vue VO template
//////////////////////////////////////////////////////////////////////////////////////////////////
//  IMPORTS

import {GameVO, IGame} from "@/model/game/game";
//////////////////////////////////////////////////////////////////////////////////////////////////
//  Series
import {GenreVO, IGenre} from "@/model/game/genre";

export interface ISeries
{
	ID: string;
	name: string;
	genre: IGenre;
	games?: IGame[];
}

export class SeriesVO implements ISeries
{
	readonly ID: string;
	readonly name: string;
	readonly genre: IGenre;
	readonly games: IGame[];

	constructor(data: ISeries)
	{
		if (!data) throw new Error("data ISeries is empty in SeriesVO constructor");
		this.ID = data.ID;
		this.name = data.name;
		this.genre = new GenreVO(data.genre);
		this.games = !data.games ? [] : data.games.map( (data:IGame) => new GameVO(data) );
	}
}
