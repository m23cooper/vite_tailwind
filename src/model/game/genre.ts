// Generated from Vue VO template
//////////////////////////////////////////////////////////////////////////////////////////////////
//  IMPORTS

//////////////////////////////////////////////////////////////////////////////////////////////////
//  SeriesType
export interface IGenre
{
	ID: string;
	name: string;
}

export class GenreVO implements IGenre
{
	readonly ID:string;
	readonly name:string;

	constructor(data: IGenre)
	{
		if (!data) throw new Error("data ISeriesType is empty in SeriesTypeVO constructor");
		this.ID = data.ID;
		this.name = data.name;
	}
}
