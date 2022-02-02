// Generated from Vue VO template
//////////////////////////////////////////////////////////////////////////////////////////////////
//  IMPORTS
import {IArmyType, ArmyTypeVO} from "./armytype";

//////////////////////////////////////////////////////////////////////////////////////////////////
//  Army
export interface IArmy
{
	id: string;
	name: string;
	type? :IArmyType | null;
}

export class ArmyVO implements IArmy
{
	readonly id:string;
	readonly name:string;
	readonly type:IArmyType | null;

	constructor(data: IArmy)
	{
		this.id = data.id;
		this.name = data.name;
		this.type = data.type ? new ArmyTypeVO(data.type) : null;
	}
}
