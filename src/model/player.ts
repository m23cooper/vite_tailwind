import {IArmy} from "./army";
import {IFaction} from "./faction";
import {IGame} from "./game";

export interface IPlayer
{
	id: string;
	alias: string;
	games?: IGame[];
	factions?: IFaction[];
	armies?: IArmy[];
}

export class PlayerVO implements IPlayer
{
	readonly id:string = "";
	readonly alias:string = "";
	readonly games:IGame[] = [];
	readonly factions:IFaction[] = [];
	readonly armies:IArmy[] = [];

	constructor(data: object)
	{
		Object.assign(this, data);
	}
}
