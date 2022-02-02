// Generated from Vue VO template
//////////////////////////////////////////////////////////////////////////////////////////////////
//  IMPORTS

import { IUnitType, UnitTypeVO } from "./unittype";

//////////////////////////////////////////////////////////////////////////////////////////////////
//  Unit
export interface IUnit
{
	id: string;
	name: string;
	type?: IUnitType | null;
	games?: IGame[];
}

export class UnitVO implements IUnit
{
	readonly id: string;
	readonly name: string;
	readonly type?: IUnitType | null;
	readonly games: IGame[];

	constructor(data: IUnit)
	{
		if (!data) throw new Error("data IUnit is empty in UnitVO constructor");
		this.id = data.id;
		this.name = data.name;
		this.type = !data.type ? null : new UnitTypeVO(data.type);
		this.games = !data.games ? [] : data.games.map( (data:IGame) => new GameVO(data) );
	}
}
