import { IFaction } from "./faction";
import { IGame } from "./game";
import {IPlayer} from "./player";
import {IUnit} from "./unit";

export interface ITeam
{
	id: string;
	alias: string;
	type: ITeamType;
	units?: IUnit[];
	teams?: ITeam[];
}

export class TeamVO implements ITeam
{
	readonly id:string = "";
	readonly alias:string = "";
	readonly type:ITeamType = {id:"", alias:""};
	readonly units:IUnit[] = [];
	readonly teams:ITeam[] = [];

	constructor(data: ITeam)
	{
		Object.assign(this, data);
	}
}

////////////////////////////////////////////////////////////////////////////////

export interface ITeamType
{
	id: string;
	alias: string;
}

export class TeamTypeVO implements ITeamType
{
	readonly id:string = "";
	readonly alias:string = "";

	constructor(data: ITeamType)
	{
		Object.assign(this, data);
	}
}
