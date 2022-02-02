// Generated from Vue VO template
//////////////////////////////////////////////////////////////////////////////////////////////////
//  IMPORTS

//////////////////////////////////////////////////////////////////////////////////////////////////
//  UnitType
export interface IUnitType
{
	ID: string;
	name: string;
	gameID: string;
}

export class UnitTypeVO implements IUnitType
{
	readonly ID:string;
	readonly name:string;
	readonly gameID:string;

	constructor(data: IUnitType)
	{
		if (!data) throw new Error("data IUnitType is empty in UnitTypeVO constructor");
		this.ID = data.ID;
		this.name = data.name;
		this.gameID = data.gameID;
	}
}
