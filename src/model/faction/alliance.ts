// Generated from Vue VO template
//////////////////////////////////////////////////////////////////////////////////////////////////
//  IMPORTS

//////////////////////////////////////////////////////////////////////////////////////////////////
//  Alliance
export interface IAlliance
{
	ID: string;
	name: string;
	gameID: string;
}

export class AllianceVO implements IAlliance
{
	readonly ID:string;
	readonly name:string;
	readonly gameID: string;

	constructor(data: IAlliance)
	{
	    if (!data) throw new Error("data IAlliance is empty in AllianceVO constructor");
		this.ID = data.ID;
		this.name = data.name;
		this.gameID = data.gameID;
	}
}
