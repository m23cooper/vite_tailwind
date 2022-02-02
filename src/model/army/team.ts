// Generated from Vue VO template
//////////////////////////////////////////////////////////////////////////////////////////////////
//  IMPORTS
import {IUnit, UnitVO} from "@/model/army/unit";
import {GameVO, IGame} from "@/model/game/game";

//////////////////////////////////////////////////////////////////////////////////////////////////
//  Team

export interface ITeam
{
	ID: string;
	name: string;
	units?: IUnit[];
	teams?: ITeam[];
}

export class TeamVO implements ITeam
{
	readonly ID: string;
	readonly name: string;
	readonly units: IUnit[];
	readonly teams: ITeam[]

	constructor(data: ITeam)
	{
		this.ID = data.ID;
		this.name = data.name;
		this.units = !data.units ? [] : data.units.map( (data:IUnit) => new UnitVO(data) );
		this.teams = !data.teams ? [] : data.teams.map( (data:ITeam) => new TeamVO(data) );
	}
}
