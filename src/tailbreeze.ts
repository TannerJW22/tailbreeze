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
}; // <<--| Implementation Pending...

export interface TailbreezeModel {
	[key: string]: string;
}

export function tailbreeze(model: TailbreezeModel): string {
	let arr: string[] = [];
	for (const [key, val] of Object.entries(model)) {
		if (typeof val === "string") {
			arr.push(val);
		} else if (typeof val === "object") {
			const subarr = tailbreeze(val);
			arr = arr.concat(subarr);
		} else {
			console.log(`Tailbreeze Error: "${key}" is not a string or object.`);
			return `Tailbreeze Error: "${key}" is not a string or object.`;
		}
	}
	arr.filter(className => className !== "");
	let classNames = arr.join(" ");
	return classNames;
}
