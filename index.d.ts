export type TailbreezeConfigInterface = {
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
};

export interface TailbreezeModel {
	[key: string]: string | object;
}

export function tailbreeze(model: TailbreezeModel): string;
