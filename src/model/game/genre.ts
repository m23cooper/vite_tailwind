// Generated from Vue VO template
//////////////////////////////////////////////////////////////////////////////////////////////////
//  IMPORTS

//////////////////////////////////////////////////////////////////////////////////////////////////
//  SeriesType
export interface ISeriesType
{
	id: string;
	name: string;
}

export class SeriesTypeVO implements ISeriesType
{
	readonly id:string;
	readonly name:string;

	constructor(data: ISeriesType)
	{
		if (!data) throw new Error("data ISeriesType is empty in SeriesTypeVO constructor");
		this.id = data.id;
		this.name = data.name;
	}
}
