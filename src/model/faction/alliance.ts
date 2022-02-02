// Generated from Vue VO template
//////////////////////////////////////////////////////////////////////////////////////////////////
//  IMPORTS

//////////////////////////////////////////////////////////////////////////////////////////////////
//  FactionType
export interface IFactionType
{
	id: string;
	name: string;
	gameID: string;
}

export class FactionTypeVO implements IFactionType
{
	readonly id:string;
	readonly name:string;
	readonly gameID: string;

	constructor(data: IFactionType)
	{
	    if (!data) throw new Error("data IFactionType is empty in FactionTypeVO constructor");
		this.id = data.id;
		this.name = data.name;
		this.gameID = data.gameID;
	}
}
