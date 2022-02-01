import { IFaction } from "./faction";
import { IGame } from "./game";
import { IPlayer } from "./player";

export interface IArmy
{
	id: string;
	game: IGame
	faction: IFaction;
	units?: any[];
	teams?: any[];
}

export class ArmyVO implements IArmy
{
	readonly id:string = "";
	readonly game: IGame = {id:"", alias:"", type:{id:"", alias:"", pointsBased:true}, factions:[], factionTypes:[]};
	readonly faction: IFaction = {id:"", alias:""};
	readonly units:any[] = [];
	readonly teams:any[] = [];

	constructor(data: IArmy)
	{
		Object.assign(this, data);
	}
}
