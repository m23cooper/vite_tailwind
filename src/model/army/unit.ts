// Generated from Vue VO template
//////////////////////////////////////////////////////////////////////////////////////////////////
//  IMPORTS

import {GameVO, IGame} from "@/model/game/game";
import { IUnitType, UnitTypeVO } from "./unittype";

//////////////////////////////////////////////////////////////////////////////////////////////////
//  Unit
export interface IUnit
{
	ID: string;
	name: string;
	gameID: string;
	type?: IUnitType | null;
}

export class UnitVO implements IUnit
{
	readonly ID: string;
	readonly name: string;
	readonly gameID: string;
	readonly type: IUnitType | null;

	constructor(data: IUnit)
	{
		if (!data) throw new Error("data IUnit is empty in UnitVO constructor");
		this.ID = data.ID;
		this.name = data.name;
		this.gameID = data.gameID;
		this.type = !data.type ? null : new UnitTypeVO(data.type);
	}
}
