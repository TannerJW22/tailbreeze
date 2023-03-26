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
	[key: string]: string | TailbreezeConfigInterface;
}

export function tailbreeze(model: TailbreezeModel) {
	let className: string = "";
	for (const [key, val] of Object.entries(model)) {
		if (typeof val === "string") {
			className = className.concat(` ${val} `);
		} else {
			console.log(`Tailbreeze Error: "${key}" is not a string.`); // <<--*
			return;
		}
	}
	className = className.trim().replace(/\s+/g, " ");
	return className;
}
