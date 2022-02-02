// Generated from Vue VO template
//////////////////////////////////////////////////////////////////////////////////////////////////
//  IMPORTS

import {AllianceVO, IAlliance} from "@/model/faction/alliance";
import {FactionVO, IFaction} from "@/model/faction/faction";
//////////////////////////////////////////////////////////////////////////////////////////////////
//  Game

export interface IGame
{
	ID: string;
	name: string;
	seriesID: string;
	factions?: IFaction[];
	alliances?: IAlliance[];
}

export class GameVO implements IGame
{
	readonly ID: string;
	readonly name: string;
	readonly seriesID: string;
	readonly factions: IFaction[];
	readonly alliances: IAlliance[];

	constructor(data: IGame)
	{
		if (!data) throw new Error("data IGame is empty in GameVO constructor");
		this.ID = data.ID;
		this.name = data.name;
		this.seriesID = data.seriesID;
		this.factions = !data.factions ? [] : data.factions.map( (data:IFaction) => new FactionVO(data) );
		this.alliances = !data.alliances ? [] : data.alliances.map( (data:IAlliance) => new AllianceVO(data) );
	}
}
