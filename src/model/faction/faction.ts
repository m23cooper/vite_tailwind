// Generated from Vue VO template
//////////////////////////////////////////////////////////////////////////////////////////////////
//  IMPORTS

//////////////////////////////////////////////////////////////////////////////////////////////////
//  Faction
export interface IFaction
{
	ID: string;
	name: string;
	factionTypeID: number;
	gameID: number;
}

export class FactionVO implements IFaction
{
	readonly ID: string;
	readonly name: string;
	readonly factionTypeID: number;
	readonly gameID: number;

	constructor(data: IFaction)
	{
		if (!data) throw new Error("data IFaction is empty in FactionVO constructor");
		this.ID = data.ID;
		this.name = data.name;
		this.factionTypeID = data.factionTypeID;
		this.gameID = data.gameID;
	}
}
