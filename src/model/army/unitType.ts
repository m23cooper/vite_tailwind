// Generated from Vue VO template
//////////////////////////////////////////////////////////////////////////////////////////////////
//  IMPORTS

//////////////////////////////////////////////////////////////////////////////////////////////////
//  UnitType
export interface IUnitType
{
	id: string;
	name: string;
}

export class UnitTypeVO implements IUnitType
{
	readonly id:string;
	readonly name:string;

	constructor(data: IUnitType)
	{
		if (!data) throw new Error("data IUnitType is empty in UnitTypeVO constructor");
		this.id = data.id;
		this.name = data.name;
	}
}
