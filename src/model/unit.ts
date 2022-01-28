
export interface IUnit
{
	id: string;
	alias: string;
	type: IUnitType;
}

export class UnitVO implements IUnit
{
	readonly id:string = "";
	readonly alias:string = "";
	readonly type:IUnitType = {id:"-1", alias:""};

	constructor(data: IUnit)
	{
		Object.assign(this, data);
	}
}

////////////////////////////////////////////////////////////////////////////////

export interface IUnitType
{
	id: string;
	alias: string;
}

export class UnitTypeVO implements IUnitType
{
	readonly id:string = "";
	readonly alias:string = "";

	constructor(data: IUnitType)
	{
		Object.assign(this, data);
	}
}

