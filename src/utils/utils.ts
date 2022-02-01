export type createMutableType<Type> = {
	-readonly [Property in keyof Type]: Type[Property];
};

export type createType<Type> = {
	[Property in keyof Type]: Type[Property];
};
