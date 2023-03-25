declare namespace TailbreezeNamespace {
	type TailbreezeConfigInterface = {
		default?: string;
		hover?: string;
		active?: string;
		focus?: string;
		visited?: string;
		disabled?: string;
		sm?: string;
		md?: string;
		lg?: string;
		xl?: string;
		"2xl"?: string;
		custom?: [Function, string];
	};

	interface TailbreezeModel {
		[key: string]: string | TailbreezeConfigInterface;
	}

	export class Tailbreeze {
		build: TailbreezeModel;
		constructor(model: TailbreezeModel);
		static model(model: TailbreezeModel): Tailbreeze;
		overwrite(newProp: TailbreezeModel): TailbreezeModel;
		clear(propName?: string): TailbreezeModel;
		toString(): string;
		toAltString(): string;
		configObjToString(configObj: object): string;
	}
}

export = TailbreezeNamespace.Tailbreeze;
