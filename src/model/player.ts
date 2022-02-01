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
	alias:string = "";
	readonly games:IGame[] = [];
	readonly factions:IFaction[] = [];
	readonly armies:IArmy[] = [];

	constructor(data: IPlayer)
	{
		Object.assign(this, data);
	}
}
