// Generated from Vue VO template
//////////////////////////////////////////////////////////////////////////////////////////////////
//  IMPORTS

import {GameVO, IGame} from "@/model/game/game";
import { IFactionType, FactionTypeVO } from "./factiontype";

//////////////////////////////////////////////////////////////////////////////////////////////////
//  Faction
export interface IFaction
{
	id: string;
	name: string;
	type?: IFactionType | null;
	games?: IGame[];
}

export class FactionVO implements IFaction
{
	readonly id: string;
	readonly name: string;
	readonly type?: IFactionType | null;
	readonly games: IGame[];

	constructor(data: IFaction)
	{
		if (!data) throw new Error("data IFaction is empty in FactionVO constructor");
		this.id = data.id;
		this.name = data.name;
		this.type = !data.type ? null : new FactionTypeVO(data.type);
		this.games = !data.games ? [] : data.games.map( (data:IGame) => new GameVO(data) );
	}
}
