import { IFaction, IFactionType } from "./faction";

export interface IGame
{
	id: string;
	alias: string;
	type: IGameType;
	factions: IFaction[];
	factionTypes: IFactionType[];
}

export class GameVO implements IGame
{
	readonly id:string = "";
	readonly alias:string = "";
	readonly type:IGameType = {id:"", alias:"", pointsBased: true};
	readonly factions:IFaction[] = [];
	readonly factionTypes:IFactionType[] = [];

	#secret: number = 1;

	constructor(data: IGame)
	{
		Object.assign(this, data);
	}
}

////////////////////////////////////////////////////////////////////////////////

export interface IGameType
{
	id: string;
	alias: string;
	pointsBased: boolean;
}

export class GameTypeVO implements IGameType
{
	readonly id:string = "";
	readonly alias:string = "";
	readonly pointsBased: boolean = true;

	constructor(data: IGameType)
	{
		Object.assign(this, data);
	}
}
