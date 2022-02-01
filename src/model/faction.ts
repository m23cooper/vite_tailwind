export interface IFaction
{
	id: string;
	alias: string;
	type?: string;
	units?: any[];
	teams?: any[];
}

export class FactionVO implements IFaction
{
	readonly id:string = "";
	readonly alias:string = "";
	readonly type:string = "";
	readonly units:any[] = [];
	readonly teams:any[] = [];

	constructor(data: IFaction)
	{
		Object.assign(this, data);
	}
}

////////////////////////////////////////////////////////////////////////////////

export interface IFactionType
{
	id: string;
	alias: string;
}

export class FactionTypeVO implements IFactionType
{
	readonly id:string = "";
	readonly alias:string = "";

	constructor(data: IFactionType)
	{
		Object.assign(this, data);
	}
}
